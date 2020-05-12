import * as React from "react";
import "./inputs.css";

interface Props{
    label: string,
    type: string,
    name: string,
    id: string,
    errorStyle?: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export class Input extends React.Component<Props> {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} id={this.props.id} onChange={this.props.onChange} className={this.props.errorStyle}/>
            </div>
        );
    }
}


