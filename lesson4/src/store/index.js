import { createStore, combineReducers } from 'redux'

const initState = {
    isLogin: false,
    userInfo: {
        name: null
    }
}

function loginReducer(state = { ...initState }, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isLogin: true,
                userInfo: {
                    name: 'xiaoming'
                }
            }

        case 'LOGOUT_SUCCESS':
            return {
                isLogin: false,
                userInfo: {
                    name: null,
                },
            }

        default:
            return state
    }
}

const store = createStore(combineReducers({ user: loginReducer }))

export default store