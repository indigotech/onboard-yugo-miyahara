import * as React from "react";
import "./home.css";
import { HDisplay } from "./titles";
import { ListItem } from "./listItem";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HDisplay text="Home"/>
                <ListItem/>
                <ListItem/>
            </div>
        );
    }
}
