import React, { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

export default class Route extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const { path, children, component, render } = this.props
                        // const match = context.location.pathname === path
                        const location = this.props.location || context.location
                        const match = matchPath(location.pathname, this.props)
                        console.log('match', match)
                        const props = {
                            ...context,
                            location,
                            match,
                        }
                        // children, component, render能接收到（history, location, match),所以定义在props中传下去

                        // match 渲染children, component, render
                        // match的时候，如果children存在：function或children本身
                        // 不match children 或null
                        // children和匹配无关
                        return <RouterContext.Provider value={props}>
                            {
                                match ?
                                    children ?
                                        typeof children === 'function' ?
                                            children(props)
                                            : children
                                        : component ?
                                            React.createElement(component, props)
                                            : render ?
                                                render(props)
                                                : null
                                    : typeof children === 'function' ?
                                        children(props)
                                        : null
                            }
                        </RouterContext.Provider>

                        // return match ? React.createElement(component, this.props) : null


                    }
                }
            </RouterContext.Consumer>
        )
    }
}