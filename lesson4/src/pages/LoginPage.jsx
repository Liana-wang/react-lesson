import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import Redirect from '../k-react-router-dom/Redirect';
import { connect } from 'react-redux'

export default connect(
    // mapStateToProps
    ({ user }) => ({ isLogin: user.isLogin }),
    // mapDispatchToProps
    {
        login: () => ({ type: 'LOGIN_SUCCESS' })
    }
)(
    class LoginPage extends Component {

        render() {
            const { isLogin, login, location: { state: { redirect = '/' } = {} } } = this.props
            console.log('props', this.props)

            if (isLogin) {
                // 已经登录
                return <Redirect to={redirect} />
            } else {
                return (
                    <div>
                        <h3>LoginPage</h3>
                        <button onClick={login}>click login</button>
                    </div>
                )
            }
        }
    })