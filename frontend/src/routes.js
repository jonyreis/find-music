import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
// import PrivateRoute from './PrivateRoute'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} exact path="/"/>
                <Route component={Register} exact path="/register"/>
                {/* <PrivateRoute component={Home}  exact path="/home"/> */}
                <Route component={Home} exact path='/home'/>                
                <Redirect from='*' to='/' />                
            </Switch>
        </BrowserRouter>
    )
}
