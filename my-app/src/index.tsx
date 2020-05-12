import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from 'apollo-boost';
import * as serviceWorker from "./serviceWorker";
import { Login } from "./components/login";

const client = new ApolloClient({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Login />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
