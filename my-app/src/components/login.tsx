import * as React from "react";
import "./login.css";
import { FormLogin } from "./form";
import { HDisplay } from "./titles";

export class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <HDisplay />
                <FormLogin />
            </div>
        );
    }
}
