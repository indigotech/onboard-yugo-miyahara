import * as React from "react";
import "./buttons.css";
import loadingIcon from "../images/ic_loading.svg";

interface Props{
    loading: boolean,
    text: string,
}

export class PrimaryButton extends React.Component<Props,object>{
    render() {
        let icon;
        if(this.props.loading){
            icon = <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
        return (
            <button className="primary">
                {icon}
                {this.props.text}
            </button>
        );
    }
}