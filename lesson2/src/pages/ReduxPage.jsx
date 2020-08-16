import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }


    add = () => {
        store.dispatch({ type: 'ADD' })
    }

    minus = () => {
        store.dispatch({ type: 'MINUS' })
    }

    asyncAdd = () => {
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({ type: 'ADD' })
                console.log('state', getState())
            }, 1000);
        })
    }

    render() {
        console.log({ store })
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyncAdd}>asyncAdd</button>
            </div>
        )
    }
}