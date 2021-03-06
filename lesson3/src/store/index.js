import { createStore } from 'redux'

function countReducer(state = 0, action) {
    console.log('state', state)
    switch (action.type) {
        case 'ADD':
            return state + 1

        case 'MINUS':
            return state - 1

        default:
            return state
    }
}

const store = createStore(countReducer)

export default store