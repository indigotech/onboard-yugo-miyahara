import * as React from "react";
import "./home.css";
import { HDisplay } from "./titles";
import { ListItem } from "./listItem";
import { Pagination } from "./pagination";
import { gql } from "apollo-boost";
import { Query, QueryResult } from "react-apollo";
import { withRouter } from "react-router";

interface State{
    currentPage: number,
    limit: number,
}

const GET_USERS = gql`
    query Users ($pageInfo: PageInputType) {
        users (pageInfo: $pageInfo){
            nodes {
                id
                name
                email
            }
            count
        }
    }
`;

class Home_ extends React.Component <any, State> {
    constructor(props: object){
        super(props);
        const thisPage = parseInt(this.props.location.search.replace('?page=', ''));

        this.state = {
            currentPage: isNaN(thisPage) ? 1 : thisPage,
            limit: 10,
        }
    }

    componentDidMount() {
        this.props.history.replace(`/home?page=${this.state.currentPage}`);
    }

    nextPage = () => {
        const nextPage = this.state.currentPage + 1;
        this.setState({currentPage: nextPage});
        this.props.history.push(`/home?page=${nextPage}`);
    }

    previousPage = () => {
        const previousPage = this.state.currentPage - 1;
        this.setState({currentPage: previousPage});
        this.props.history.push(`/home?page=${previousPage}`);
    }

    pageClick = (page: number) =>{
        this.setState({currentPage: page});
        this.props.history.push(`/home?page=${page}`);
    }

    render() {
        return (
            <Query query={GET_USERS} variables={{pageInfo: {offset: (this.state.currentPage - 1) * 10, limit:this.state.limit}}}>
                {({ loading, error, data }: QueryResult) => {
                    if (loading) return <p>Carregando...</p>;
                    if (error) return <p>Houve um erro na chamada {error}</p>
                    return (
                        <div className="container">
                            <HDisplay text="Lista de Usuários" />
                            <div className="card">
                                {data.users.nodes.map(
                                    (node: { name: string; email: string }) => (
                                        <ListItem
                                            key={node.email}
                                            name={node.name}
                                            email={node.email}
                                        />
                                    )
                                )}
                            </div>
                            <button onClick={this.previousPage}>Anterior</button>
                            {
                                <Pagination onclick={this.pageClick} count={Math.ceil(data.users.count/this.state.limit)}/>
                            }
                            <button onClick={this.nextPage}>Próxima</button>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export const Home = withRouter(Home_);
