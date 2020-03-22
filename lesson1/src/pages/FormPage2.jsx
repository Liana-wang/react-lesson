import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

const nameRule = { required: true, message: 'please input your name' }
const passwordRule = { required: true, message: 'please input your password' }

@Form.create({})
class FormPage2 extends Component {
    componentDidMount() {
        const { setFieldsValue } = this.props.form
        console.log('setFieldsValue', setFieldsValue)
    }


    submit = () => {
        const { getFieldsValue, validateFields } = this.props.form

        validateFields((err, values) => {
            console.log('err', err)
            console.log('success', values)
        })

        console.log('提交', getFieldsValue())
    }

    render() {
        console.log('props', this.props)

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <h3>FormPage2</h3>
                <Form>
                    <Form.Item>
                        {
                            getFieldDecorator('name', { rules: [nameRule] })(
                                <Input placeholder="please input your name" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', { rules: [passwordRule] })(
                                <Input placeholder="please input your password" />
                            )
                        }
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>
                        提交
                    </Button>
                </Form>
            </div>
        )
    }
}

export default FormPage2; 