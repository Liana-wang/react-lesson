import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../kReactRedux'

// connect接收一个组件，返回一个组件hoc，帮助子组件获取store
export default connect(
    // mapStateToProps
    state => ({ count: state }),
    // mapDispatchToProps
    // 1 接收一个对象
    // {
    //     add: () => ({ type: 'ADD' })
    // }

    // 2 接收函数
    // dispatch => {
    //     let res = {
    //         add: () => dispatch({ type: 'ADD' }),
    //         minus: () => dispatch({ type: 'MINUS' })
    //     }
    //     return {
    //         dispatch,
    //         ...res
    //     }
    // }

    // 3 统一dispatch处理
    dispatch => {
        let res = {
            add: () => ({ type: 'ADD' }),
            minus: () => ({ type: 'MINUS' })
        }
        res = bindActionCreators(res, dispatch)
        return {
            dispatch,
            ...res
        }
    }

)(class ReactReduxPage extends Component {
    render() {
        console.log(this.props)
        const { count, dispatch, add, minus } = this.props
        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{count}</p>
                <button onClick={() => dispatch({ type: 'ADD' })}>add-dispatch</button>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
})