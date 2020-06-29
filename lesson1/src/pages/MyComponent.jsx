import React, { Component } from 'react'

// 防止内存溢出
// 若子组件里有componentWillUnmount方法，则需在子组件中的componentWillUnmount执行this.setState = () => {return}
class MyComponent extends Component {
    componentWillUnmount() {
        console.log('mycomponent')
        this.setState = (state, callback) => {
            return
        }
    }
}


export default MyComponent