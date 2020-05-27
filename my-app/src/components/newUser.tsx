import * as React from "react";
import "./newUser.css";
import { HDisplay } from "./titles";
import { FormNewUser } from "./formNewUser";

export class NewUserPage extends React.Component {
    render() {
        return (
            <div className="container">
                <HDisplay text="Adicione um usuário"/>
                <FormNewUser />
            </div>
        );
    }
}
