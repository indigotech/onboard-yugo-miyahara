import * as React from "react";
import "./inputs.css";

interface FieldProps{
    label: string,
    name: string,
    id: string,
    errorStyle: string,
}

interface InputProps extends FieldProps{
    type: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

interface SelectProps extends FieldProps{
    selectItems: string[],
    onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export class Input extends React.Component<InputProps> {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} id={this.props.id} onChange={this.props.onChange} className={this.props.errorStyle}/>
            </div>
        );
    }
}

export class SelectBox extends React.Component<SelectProps> {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <select onChange={this.props.onChange} name={this.props.name} id={this.props.id} defaultValue="default">
                    <option disabled hidden value="default">Selecione uma opção</option>
                    {this.props.selectItems?.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        );
    }
}


