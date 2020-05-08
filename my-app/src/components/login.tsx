import * as React from "react";
import "./login.css";
import { InputEmail, InputPassword } from "./inputs";
import { HDisplay } from "./titles";
import { PrimaryButton } from "./buttons";

export class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <HDisplay />
                <InputEmail />
                <InputPassword />
                <PrimaryButton />
            </div>
        );
    }
}
