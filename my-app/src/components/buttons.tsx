import * as React from "react";
import "./buttons.css";
import loadingIcon from "../images/ic_loading.svg";

interface PrimaryButtonProps{
    loading: boolean,
    text: string,
}

export class PrimaryButton extends React.Component<PrimaryButtonProps,object>{
    render() {
        return (
            <button className="primary">
                {this.props.loading ? <img src={loadingIcon} alt="loading" className="loadingIcon" /> : null}
                {this.props.text}
            </button>
        );
    }
}
