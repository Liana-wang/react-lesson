import React from 'react'
import { ThemeConsumer } from '../ThemeContext'

export default function ConsumerPage(props) {
    return (
        <div className={'border'}>
            <ThemeConsumer>
                {
                    ctx => <div className={ctx.themeColor}>文本</div>
                }
            </ThemeConsumer>
        </div>
    )
}
