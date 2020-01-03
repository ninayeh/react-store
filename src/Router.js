import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from 'component/App'
import Login from 'component/Login'
import NotFound from 'component/NotFound'

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