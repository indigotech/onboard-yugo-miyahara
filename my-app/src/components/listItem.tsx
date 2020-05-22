import * as React from "react";
import "./listItem.css";

interface Props {
    name: string;
    email: string;
}

export class ListItem extends React.Component<Props> {
    render() {
        return (
            <div className="listItem">
                <div className="listItemName">{this.props.name}</div>
                <div className="listItemEmail">{this.props.email}</div>
            </div>
        );
    }
}
