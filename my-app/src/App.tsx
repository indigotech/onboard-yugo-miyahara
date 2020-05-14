import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";

function App() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
