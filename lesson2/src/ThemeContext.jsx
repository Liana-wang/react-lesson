import React from 'react'

// 生产商 如果没有匹配到provider，就取默认值
export const ThemeContext = React.createContext({ themeColor: "pink" })

// 批发商
export const ThemeProvider = ThemeContext.Provider

// 消费者
export const ThemeConsumer = ThemeContext.Consumer