import React, { Component } from 'react'
// import MyComponent from './MyComponent'

// class类型的高阶组件
const HOC = Cmp => class extends Component {
    componentDidMount() {
        // console.log('11111')
        // console.log({ Cmp })
    }

    componentWillUnmount() {
        console.log('hoc will unmount')
        this.setState = (state, callback) => {
            return
        }
    }

    render() {
        return (
            <Cmp {...this.props} />
        )
    }

}

// 被接收的组件
@HOC
class Child extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log('child will unmount')
        // this.setState = (state, callback) => {
        //     return
        // }
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    render() {
        return (
            <div {...this.props}>{this.props.children}</div>
        );
    }
}

// const foo = Cmp => props => {
//     console.log({ Cmp })
//     return (
//         <div className={'border'}>
//             <Cmp {...props} />
//         </div>
//     )
// }

// const Foo = HOC(Child)

export default class MyHocPage extends Component {
    render() {
        return (
            <div>
                <h3>MyHocPage</h3>
                <Child className={"greenBorder"}>我是child</Child>
            </div>
        )
    }
}
