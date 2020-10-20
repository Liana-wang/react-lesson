import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'

const ValueContext = React.createContext()

export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WarappedComponent => {
    return class extends Component {
        // 此时每个组件的所有周期都能获取this.context
        static contextType = ValueContext

        constructor(props) {
            super(props)
            this.state = {
                props: {}
            }
        }

        componentDidMount() {
            const { subscribe } = this.context
            this.update()

            // 订阅
            subscribe(() => {
                this.update()
            })
        }

        update = () => {
            const { getState, dispatch } = this.context

            let stateProps = mapStateToProps(getState())
            let dispatchProps

            // mapDispatchToProps Object/Function
            if (typeof mapDispatchToProps === 'object') {
                dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
            } else if (typeof mapDispatchToProps === 'function') {
                dispatchProps = mapDispatchToProps(dispatch, this.props)
            }
            // 默认
            else {
                dispatchProps = { dispatch }
            }

            this.setState({
                props: {
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }

        render() {
            console.log('this.context', this.context)
            return <WarappedComponent {...this.state.props} />
        }
    }
}

export class Provider extends Component {
    render() {
        return <ValueContext.Provider value={this.props.store}>{this.props.children}</ValueContext.Provider>
    }
}

function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}


export function bindActionCreators(creators, dispatch) {
    let obj = {}

    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch)
    }

    return obj
}