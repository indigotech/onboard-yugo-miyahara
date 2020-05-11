import * as React from "react";
import "./form.css";
import { Input } from "./inputs";
import { PrimaryButton } from "./buttons";

interface State {
    fields: {
        email: string;
        password: string;
    };
    errors: {
        email: string;
        password: string;
    };
}

export class FormLogin extends React.Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            fields: {
                email: "",
                password: ""
            },
            errors: {
                email: "",
                password: "",
            },
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        switch (e.target.name) {
            case "email":
                fields.email = [e.target.value].toString();
                errors.email = validEmailRegex.test(e.target.value)
                    ? ""
                    : "E-mail inválido";
                break;
            case "password":
                fields.password = [e.target.value].toString();
                errors.password =
                    e.target.value.length < 8
                        ? "Senha deve conter mais de 8 dígitos"
                        : "";
                break;
            default:
                break;
        }
        this.setState({fields: fields ,errors: errors});
        // this.setState({...this.state, errors:{...this.state.errors,[e.target.name]: ""},[e.target.name]: e.target.value});
    };

    

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validateErrors(this.state.errors) && this.validateEmpty(this.state.fields, this.state.errors)){
            console.info('Formulário válido')
        } else{
            console.info('Formulário inválido')
        }
    }

    validateEmpty = (fields: any, errors: any) => {
        let valid = false;
        Object.keys(fields).map( (key) => fields[key].length > 0 ? valid = true : errors[key] = "Campo obrigatório")
        this.setState({errors: errors});
        return valid
    }

    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <Input
                    type="email"
                    label="E-mail"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    errorStyle={this.state.errors.email  && "fieldError"}
                />
                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                <Input
                    type="password"
                    label="Senha"
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                    errorStyle={this.state.errors.password && "fieldError"}
                />
                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                <PrimaryButton />
            </form>
        );
    }
}

const validEmailRegex = new RegExp(
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateErrors = (errors: any) => {
    let valid = true;
    Object.keys(errors).map( (key) =>  errors[key].length > 0 ? valid = false:true )

    return valid
}

