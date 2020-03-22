import React, { Component } from 'react'

// HOC高阶组件：接收一个组件，返回一个新的组件
function Child(props) {
    return (
        <div>
            Child
        </div>
    )
}

// Cmp这里是function或class组件
const foo = Cmp => props => {
    return (
        <div className={'border'}>
            <Cmp {...props} />
        </div>
    )
}

const foo2 = Cmp => props => {
    return (
        <div className={'greenBorder'}>
            <Cmp {...props} />
        </div>
    )
}

const Foo = foo2(foo(foo(Child)))

// !装饰器只能⽤在class上
// 执⾏顺序从下往上
@foo2
@foo
@foo
class Child2 extends Component {
    render() {
        return (
            <div>Child2</div>
        );
    }
}

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo />
                <Child2 />
            </div>
        )
    }
}
