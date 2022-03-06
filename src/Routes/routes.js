import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../components/login';


const routes=()=>{
    return(
    <Router>
        <Switch>
            <Route exact path='/' component={Login} />
        </Switch>
    </Router>
    )
}
export default routes;