import * as React from "react";
import "./listItem.css";

interface Props{

}

export class ListItem extends React.Component<Props> {
    render() {
        return (
            <div className="listItem">
                <div className="listItemName">
                    Zeca Blogueiro
                </div>
                <div className="listItemEmail">
                    zeca.blog@blogueirão.com.br
                </div>
            </div>
        );
    }
}


