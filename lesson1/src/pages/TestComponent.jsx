import React from 'react'
import MyComponent from './MyComponent';

export default class TestComponent extends MyComponent {
    state = {
        count: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
        }, 2000);
    }

    // componentWillUnmount() {
    //     console.log('testcomponet')
    // }


    render() {
        return (
            <div>
                测试内存溢出
            </div>
        )
    }
}
