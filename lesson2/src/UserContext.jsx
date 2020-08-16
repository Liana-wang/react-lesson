import React from 'react'

// 生产商 如果没有匹配到provider，就取默认值
export const UserContext = React.createContext({ name: "hhh" })

// 批发商
export const UserProvider = UserContext.Provider

// 消费者
export const UserConsumer = UserContext.Consumer