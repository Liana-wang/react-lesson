import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import RouterContext from './RouterContext'

export default class BrowserRouter extends Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory()
        this.state = {
            location: this.history.location
        }

        this.unListen = this.history.listen(location => {
            this.setState({ location })
        })
    }

    componentWillUnmount() {
        this.unListen && this.unListen()
    }

    render() {
        return (
            <RouterContext.Provider value={{ history: this.history, location: this.state.location }}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}