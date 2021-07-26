import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import BrowserRouter from '../k-react-router-dom/BrowserRouter'
import Route from '../k-react-router-dom/Route'
import Link from '../k-react-router-dom/Link'
import Switch from '../k-react-router-dom/Switch'
import HomePage from './HomePage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute'

export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h1>RouterPage</h1>
                <BrowserRouter
                >
                    <nav>
                        <Link to="/">首页</Link>
                        <Link to="/user">用户中心</Link>
                        <Link to="/children">children</Link>
                        <Link to="/render">render</Link>

                        <Link to="/login">登录</Link>
                        <Link to="/search/123">搜索</Link>
                    </nav>
                    {/* Route一定要包裹在Router内，因为Route要应用history，location，这些来自Router */}
                    {/* 精确匹配 exact */}
                    {/* path值如果不写， 则一直匹配 */}
                    {/* switch独占路由 */}
                    {/* <Switch location={{ pathname: '/user' }}> */}
                    <Switch>
                        {/* component如果写成() => HomePage的形式，每次都会卸载再挂载，
                            因为component是使用React.createComponent创建的，箭头函数是匿名函数，每次生成的type都不一样 
                        */}
                        <Route exact path="/" component={HomePage}></Route>

                        {/* <Route path="/user" component={UserPage}></Route> */}
                        <Route path="/children" children={() => <div>children</div>}></Route>
                        <Route path="/render" render={() => <div>render</div>}></Route>

                        {/* 路由守卫 */}
                        <PrivateRoute path="/user" component={UserPage} />

                        <Route path="/login" component={LoginPage}></Route>

                        {/* 动态路由 */}
                        <Route path="/search/:id" component={SearchComponent}></Route>
                        {/* <Route render={() => <div>404</div>}></Route> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

function DetailComponent(prpos) {
    return (
        <div>DetailComponent</div>
    )
}

function SearchComponent(props) {
    console.log('SearchComponent', props)
    const { id } = props.match.params
    return (
        <div>
            SearchComponent-{id}
            {/* 嵌套路由 */}
            <Link to={"/search/" + id + "/detail"}>详情</Link>
            <Route path={"/search/:" + id + "/detail"} component={DetailComponent}></Route>
        </div>
    )
}