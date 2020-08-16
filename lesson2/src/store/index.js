// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from './kStore';
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import { createStore } from './kStore';

function countReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1

        case 'MINUS':
            return state - 1

        default:
            return state
    }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))

export default store

function logger({ getState, dispatch }) {
    return dispatch => action => {
        console.log(action.type + '执行了')
        dispatch(action)
    }
}

function thunk({ getState, dispatch }) {
    return dispatch => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        } else {
            dispatch(action)
        }
    }
}