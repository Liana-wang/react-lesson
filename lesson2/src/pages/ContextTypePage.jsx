import React, { Component } from 'react'
import { ThemeContext } from '../ThemeContext';

export default class ContextTypePage extends Component {
    static contextType = ThemeContext

    render() {
        console.log('this', this)
        // context在任何生命周期中都可以访问
        const { themeColor } = this.context
        return (
            <div className={'border'}>
                <div className={themeColor}>ContextTypePage</div>
            </div>
        )
    }
}