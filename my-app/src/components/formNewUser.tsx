import * as React from "react";
import "./formNewUser.css";
import { Input, SelectBox } from "./inputs";
import { PrimaryButton } from "./buttons";
import { Mutation, MutationFunction, MutationResult } from "react-apollo";
import { gql } from "apollo-boost";

interface State {
    fields: {
        name: string;
        phone: string;
        birthDate: string;
        email: string;
        password: string;
        role: string;
    };
    errors: {
        name: string;
        phone: string;
        birthDate: string;
        email: string;
        password: string;
        role: string;
    };
    loading: boolean;
    created: boolean;
}

const CREATEUSER = gql`
    mutation CreateUser($data: UserInputType!) {
        createUser(data: $data) {
            id
            name
            phone
            birthDate
            email
            role
        }
    }
`;

export class FormNewUser extends React.Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            fields: {
                name: "",
                phone: "",
                birthDate: "",
                email: "",
                password: "",
                role: "",
            },
            errors: {
                name: "",
                phone: "",
                birthDate: "",
                email: "",
                password: "",
                role: "",
            },
            loading: false,
            created: false,
        };
    }

    handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        switch (e.target.name) {
            case "name":
                fields.name = [e.target.value].toString();
                break;
            case "email":
                fields.email = [e.target.value].toString();
                errors.email = validEmailRegex.test(e.target.value)
                    ? ""
                    : "E-mail inválido";
                break;
            case "phone":
                fields.phone = [e.target.value].toString();
                errors.phone = validPhoneRegex.test(e.target.value)
                    ? ""
                    : "Phone inválido";
                break;
            case "birthDate":
                fields.birthDate = [e.target.value].toString();
                errors.birthDate = validDateRegex.test(e.target.value)
                    ? ""
                    : "Data inválida";
                break;
            case "password":
                fields.password = [e.target.value].toString();
                errors.password =
                    e.target.value.length < 8
                        ? "Senha deve conter mais de 8 dígitos"
                        : "";
                break;
            case "role":
                fields.role = [e.target.value].toString();
                break;
            default:
                break;
        }
        this.setState({ fields: fields, errors: errors });
    };

    handleSubmit = (createUser: MutationFunction) => async (
        e: React.FormEvent
    ) => {
        e.preventDefault();
        if (
            validateErrors(this.state.errors) &&
            this.validateEmpty(this.state.fields, this.state.errors)
        ) {
            try {
                this.setState({ loading: true });
                const userResponse = await createUser({
                    variables: {
                        data: {
                            name: this.state.fields.name,
                            email: this.state.fields.email,
                            phone: this.state.fields.phone,
                            birthDate: this.state.fields.birthDate,
                            password: this.state.fields.password,
                            role: this.state.fields.role,
                        },
                    },
                });
                console.log(userResponse);
                this.setState({ loading: false, created: true });
            } catch (error) {
                console.log(error);
                this.setState({ loading: false });
            }
        } else {
            console.info("Formulário inválido");
        }
    };

    validateEmpty = (fields: any, errors: any) => {
        let valid = false;
        Object.keys(fields).map((key) =>
            fields[key].length > 0
                ? (valid = true)
                : (errors[key] = "Campo obrigatório")
        );
        this.setState({ errors: errors });
        return valid;
    };

    render() {
        const { errors } = this.state;
        return (
            <Mutation mutation={CREATEUSER}>
                {(createUser: MutationFunction, { data }: MutationResult) => (
                    <form onSubmit={this.handleSubmit(createUser)} noValidate>
                        <Input
                            type="name"
                            label="Nome"
                            name="name"
                            id="name"
                            onChange={this.handleChange}
                            errorStyle={this.state.errors.name && "fieldError"}
                        />
                        {errors.name.length > 0 && (
                            <span className="error">{errors.name}</span>
                        )}
                        <Input
                            type="email"
                            label="E-mail"
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                            errorStyle={this.state.errors.email && "fieldError"}
                        />
                        {errors.email.length > 0 && (
                            <span className="error">{errors.email}</span>
                        )}
                        <Input
                            type="phone"
                            label="Telefone"
                            name="phone"
                            id="phone"
                            onChange={this.handleChange}
                            errorStyle={this.state.errors.phone && "fieldError"}
                        />
                        {errors.phone.length > 0 && (
                            <span className="error">{errors.phone}</span>
                        )}
                        <Input
                            type="date"
                            label="Data de Nascimento"
                            name="birthDate"
                            id="birthDate"
                            onChange={this.handleChange}
                            errorStyle={
                                this.state.errors.birthDate && "fieldError"
                            }
                        />
                        {errors.birthDate.length > 0 && (
                            <span className="error">{errors.birthDate}</span>
                        )}
                        <Input
                            type="password"
                            label="Senha"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                            errorStyle={
                                this.state.errors.password && "fieldError"
                            }
                        />
                        {errors.password.length > 0 && (
                            <span className="error">{errors.password}</span>
                        )}
                        <SelectBox
                            label="Cargo"
                            name="role"
                            id="role"
                            selectItems={["admin", "user"]}
                            onChange={this.handleChange}
                            errorStyle={this.state.errors.role && "fieldError"}
                        />
                        {errors.role.length > 0 && (
                            <span className="error">{errors.role}</span>
                        )}
                        <PrimaryButton
                            loading={this.state.loading}
                            text="Adicionar"
                        />
                        {this.state.created && (
                            <div className="msgBox">Usuário <strong>{this.state.fields.name}</strong> criado com sucesso</div>
                        )}
                    </form>
                )}
            </Mutation>
        );
    }
}

const validEmailRegex = new RegExp(
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validPhoneRegex = new RegExp(
    // eslint-disable-next-line
    /(\(?\d{2}\)?\s)?(\d{4,5}\d{4})/
);

const validDateRegex = new RegExp(
    // eslint-disable-next-line
    /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
);

const validateErrors = (errors: any) => {
    let valid = true;
    Object.keys(errors).map((key) =>
        errors[key].length > 0 ? (valid = false) : true
    );

    return valid;
};
