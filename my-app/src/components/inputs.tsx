import * as React from "react";
import "./inputs.css";

export class InputEmail extends React.Component {
    render() {
        return (
            <div className="input">
                <label>E-mail</label>
                <input type="email" name="email" id="email" />
            </div>
        );
    }
}

export class InputPassword extends React.Component {
    render() {
        return (
            <div className="input">
                <label>Password</label>
                <input type="password" name="password" id="password" />
            </div>
        );
    }
}
