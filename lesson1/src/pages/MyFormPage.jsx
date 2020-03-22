import React, { Component } from 'react'
import KFormCreate from '../components/KFormCreate'

@KFormCreate
class MyFormPage extends Component {
    submit = () => {
        const { getFieldsValue, getFieldValue } = this.props
        console.log('submit', getFieldsValue(), getFieldValue('name'))
    }

    render() {
        console.log('props', this.props)
        const { getFieldDecorator } = this.props
        return (
            <div>
                <h3>MyFormPage</h3>
                {
                    getFieldDecorator('name', {})(
                        <input type="text" placeholder="please input ur name" />
                    )
                }
                {
                    getFieldDecorator('password', {})(
                        <input type="password" placeholder="please input ur password" />
                    )
                }
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}

export default MyFormPage