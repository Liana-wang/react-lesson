export function createStore(reducer, enhancer) {
    // 如果有加强函数，就加强
    // return {dispatch, getState, subscribe}
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState = undefined
    let currentListeners = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        // 监听函数是一个数组
        currentListeners.map(listener => listener())
    }

    // 订阅，订阅可以多次订阅
    function subscribe(listener) {
        currentListeners.push(listener)
    }

    // 初始化state值，保证type不和项目中的重复
    dispatch({ type: '@INIT' })

    return {
        getState,
        dispatch,
        subscribe,
    }
}

// 使用中间件加强，以dispatch为例
export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)

        let dispatch = store.dispatch

        const middleApi = {
            getState: store.getState,
            dispatch
        }

        // 给middleware参数，例如dispatch
        const middlewareChain = middlewares.map(middleware => middleware(middleApi))

        dispatch = compose(...middlewareChain)(dispatch)

        return {
            ...store,
            dispatch
        }
    }
}

/**
 * 
 * @param  {...any} funcs 聚合函数
 */
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (arg) => a(b(arg)))
}