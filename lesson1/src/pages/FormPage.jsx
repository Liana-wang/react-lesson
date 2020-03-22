import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

export default class FormPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    submit = () => {
        console.log('提交', this.state)
    }

    render() {
        const { name, password } = this.state
        return (
            <div>
                <h3>FormPage</h3>
                <Form>
                    <Form.Item>
                        <Input
                            value={name}
                            onChange={(e) => this.setState({
                                name: e.target.value
                            })}
                            placeholder="please input your name"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            value={password}
                            onChange={(e) => this.setState({
                                password: e.target.value
                            })}
                            placeholder="please input your password"
                        />
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>
                        提交
                    </Button>
                </Form>
            </div>
        )
    }
}
