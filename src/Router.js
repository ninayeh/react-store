import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from 'pages/App'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'

const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
);

export default Router;