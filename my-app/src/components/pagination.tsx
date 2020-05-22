import * as React from "react";
import "./pagination.css";
import { withRouter } from "react-router";

interface Props {
    count: number;
    onclick: (pagina: number) => void,
}

class Pagination_ extends React.Component<any,Props, any> {
    handleClick = (page: number) => (e: React.FormEvent) =>{
        this.props.onclick(page)
    }
    render() {
        const pages = Array.from(Array(this.props.count + 1).keys()).slice(1);
        return (
            <div className="pagesContainer">
                {pages.map((page) => (
                    <div key={page} className="page" onClick={this.handleClick(page)}>{page}</div>
                ))}
            </div>
        );
    }
}

export const Pagination = withRouter(Pagination_);
