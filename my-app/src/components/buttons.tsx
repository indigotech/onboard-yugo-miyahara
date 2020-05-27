import * as React from "react";
import "./buttons.css";
import loadingIcon from "../images/ic_loading.svg";
import addIcon from "../images/ic_plus.svg";

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

export class FAB extends React.Component {
    render() {
        return(
            <button className="fab">
                <img src={addIcon} alt=""/>
            </button>
        );
    }
}
