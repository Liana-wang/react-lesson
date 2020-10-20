import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../kReactRedux'
import { bindActionCreators } from 'redux'

export default connect(
    // mapStateToProps
    // state => ({ count: state }),
    // ! ownProps是组件本身的props
    // ! ownProps需谨慎使用，如果ownProps发生变化，mapStateToProps也会被重新执行，
    // ! state也会被重新计算，这个会影响性能
    (state, ownProps) => {
        return {
            count: state,
        }
    },
    // mapDispatchToProps, (Obj, Function)
    // 如果不指定mapDispatchToProps，默认props会被注入dispatch本身
    // {
    //     add: () => ({ type: 'ADD' }),
    //     minus: () => ({ type: 'MINUS' })
    // },

    // Function
    // ! ownProps是组件本身的props
    // ! ownProps需谨慎使用，如果ownProps发生变化，mapDispatchToProps也会被重新执行，
    // ! 这个会影响性能
    (dispatch, ownProps) => {
        console.log('ownProps', ownProps)
        // let res = {
        //     add: () => dispatch({ type: 'ADD' }),
        //     minus: () => dispatch({ type: 'MINUS' })
        // }

        let res = {
            add: () => ({ type: 'ADD' }),
            minus: () => ({ type: 'MINUS' })
        }

        res = bindActionCreators(res, dispatch)

        return {
            dispatch,
            ...res
        }
    },
    // mergeProps 等前面的两个参数计算完之后再return
    (stateProps, dispatchProps, ownProps) => {
        return { omg: "omg", ...stateProps, ...dispatchProps, ...ownProps }
    }
)(class ReactReduxPage extends Component {
    render() {
        console.log('props', this.props)
        const { count, add, minus } = this.props
        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{count}</p>
                <button onClick={add}>add count</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
})