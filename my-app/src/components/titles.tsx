import * as React from "react";
import "./titles.css";

interface Props{
    text: string
}

export class HDisplay extends React.Component <Props, object> {
    render() {
        return (
            <div className="HDisplay">
                {this.props.text}
            </div>
        );
    }
}