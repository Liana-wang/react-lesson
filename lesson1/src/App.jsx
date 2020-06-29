import React from 'react';
// import Button from 'antd/es/button'
// import 'antd/dist/antd.css'

import { Button } from 'antd'
import HomePage from './pages/HomePage';
import HocPage from './pages/HocPage';
import FormPage from './pages/FormPage';
import FormPage2 from './pages/FormPage2';
import MyFormPage from './pages/MyFormPage';
import DialogPage from './pages/DialogPage';
import MyHocPage from './pages/MyHocPage';
import TestComponent from './pages/TestComponent';


class App extends React.Component {
    state = {
        isShowMyHoc: true
    }

    render() {
        return (
            <div className="App">
                {/* antd测试 */}
                <Button type="primary" onClick={() => { this.setState({ isShowMyHoc: !this.state.isShowMyHoc }) }}>add</Button>

                {/* 测试.less */}
                {/* <HomePage /> */}

                {/* 高阶组件 */}
                {/* <HocPage /> */}
                {
                    !this.state.isShowMyHoc ?
                        <TestComponent />
                        : null
                }

                {/* 手动双向绑定数据 */}
                {/* <FormPage /> */}

                {/* 使用antd内部封装函数绑定数据 */}
                <FormPage2 />

                {/* 自己实现一个create */}
                {/* <MyFormPage /> */}

                {/* 弹窗Dialog */}
                <DialogPage />
            </div>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//             {/* antd测试 */}
//             <Button type="primary">add</Button>

//             {/* 测试.less */}
//             {/* <HomePage /> */}

//             {/* 高阶组件 */}
//             {/* <HocPage /> */}
//             <MyHocPage />

//             {/* 手动双向绑定数据 */}
//             {/* <FormPage /> */}

//             {/* 使用antd内部封装函数绑定数据 */}
//             {/* <FormPage2 /> */}

//             {/* 自己实现一个create */}
//             {/* <MyFormPage /> */}

//             {/* 弹窗Dialog */}
//             <DialogPage />
//         </div>
//     );
// }

export default App;