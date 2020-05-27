import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import {NewUserPage} from "./components/newUser"

function App() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route>
                <AuthRoutes/>
            </Route>
        </Switch>
    );
}

const AuthRoutes = () => {
    if(!window.localStorage.getItem('token')){
        return <Redirect to="/login"/>
    }
    return (
        <>
            <Route path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/newUser">
                <NewUserPage/>
            </Route>
        </>
    );
}

export default App;
