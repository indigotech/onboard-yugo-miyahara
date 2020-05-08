import * as React from "react";
import "./Hello.css";

export interface Props {
    name: string;
    enthusiasmLevel: number;
}

export interface State {
    currentEnthusiasm: number;
}

// STATELESS FUNCTION COMPONENT
// Function that take Props interface object and detructures all the properties passed.
export const Hello = (props: Props) => {
    if (props.enthusiasmLevel <= 0) {
        throw new Error("You should be a little more enthusiastic!");
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {props.name + getExclamationMark(props.enthusiasmLevel)}
            </div>
        </div>
    );
};

export class HelloClass extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 1,
        };
    }

    onIncrement = () =>
        this.setState({ currentEnthusiasm: this.state.currentEnthusiasm + 1 });
    onDecrement = () =>
        this.setState({ currentEnthusiasm: this.state.currentEnthusiasm - 1 });

    render() {
        if (this.props.enthusiasmLevel <= 0) {
            throw new Error("You should be a little more enthusiastic!");
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello{" "}
                    {this.props.name +
                        getExclamationMark(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

function getExclamationMark(quantity: number) {
    // let exclamations = '';
    // for (let i = 0; i < quantity; i++){
    //     exclamations = exclamations + '!';
    // }
    let list = Array(quantity + 1).join("!");
    return list;
}
