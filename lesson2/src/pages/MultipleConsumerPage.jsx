import React, { Component } from 'react'
import { ThemeConsumer } from '../ThemeContext'
import { UserConsumer } from '../UserContext'

export default class MultipleConsumerPage extends Component {
    render() {
        return (
            <div>
                <h3>MultipleConsumerPage</h3>
                <ThemeConsumer>
                    {
                        theme => <UserConsumer>
                            {
                                user => <div className={theme.themeColor}>{user.name}</div>
                            }
                        </UserConsumer>
                    }
                </ThemeConsumer>
            </div>
        )
    }
}