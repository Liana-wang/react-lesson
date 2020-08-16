import React, { Component } from 'react'
import { ThemeProvider } from '../ThemeContext';
import ContextTypePage from './ContextTypePage';
import ConsumerPage from './ConsumerPage';
import { UserProvider } from '../UserContext';
import MultipleConsumerPage from './MultipleConsumerPage';

export default class ContextPage extends Component {
    state = {
        theme: {
            themeColor: "red"
        },
        user: {
            name: 'xiaoming'
        }
    }

    changeColor = () => {
        this.setState({
            theme: {
                themeColor: this.state.theme.themeColor === 'red' ? 'green' : 'red'
            }
        })
    }

    render() {
        return (
            <div>
                <h3>ContextPage</h3>
                <button onClick={this.changeColor}>change color</button>
                <ThemeProvider value={this.state.theme}>
                    <ContextTypePage />
                    <ConsumerPage />

                    <UserProvider value={this.state.user}>
                        <MultipleConsumerPage />
                    </UserProvider>
                </ThemeProvider>
            </div>
        )
    }
}