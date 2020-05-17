import * as React from "react";
import "./home.css";
import { HDisplay } from "./titles";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HDisplay text="Home"/>
            </div>
        );
    }
}
