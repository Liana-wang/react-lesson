# Redux
1. createStore, 创建store
2. reducer 初始化，修改状态函数
3. getState 获取状态值
4. dispatch 提交更改
5. subscribe 订阅更改

```jsx
componentDidMount() {
    store.subscribe(() => {
        this.forceUpdate()
    })

    add = () => {
        store.dispatch({type: 'ADD'})
    }

    return (
        <div>{store.getState()}</div>
    )
}
```

# Context 
1. const ValueContext =  React.createContext(初始值)
2. ValueContext.Provider
3. 函数组件中：ValueContext.Consumer 或 useContext。类组件中：Class.ContextType 使用this.context来访问

# React-Redux
1. connect 为组件提供数据和变更方法
2. Provider 为后代组件提供store

原理：
使用React.createContext提供Provider
在connect高阶组件中接收参数mapStateToProps，mapDispatchToProps 返回一个函数接收组件，返回一个类组件，并将mapStateToProps，mapDispatchToProps的方法或对象都放到props中。

# React-Router
children > component > render

component里传入箭头函数，每次更新都会重新渲染，因为component是React.createElelemt，箭头函数是匿名函数，所以每次的type值都不一样，就会重新卸载和挂载。

路由守卫，借助redux