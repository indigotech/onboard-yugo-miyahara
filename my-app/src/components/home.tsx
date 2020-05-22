import * as React from "react";
import "./home.css";
import { HDisplay } from "./titles";
import { ListItem } from "./listItem";
import { gql } from "apollo-boost";
import { Query, QueryResult } from "react-apollo";

// const GET_USERS = gql`
//     {
//         users {
//             nodes {
//                 id
//                 name
//                 email
//             }
//         }
//     }
// `;

const GET_USERS = gql`
    query Users {
        users {
            nodes {
                id
                name
                email
            }
        }
    }
`;

export class Home extends React.Component {
    render() {
        return (
            <Query query={GET_USERS}>
                {({ loading, error, data }: QueryResult) => {
                    if (loading) return null;
                    return (
                        <div className="container">
                            <HDisplay text="Lista de Usuários" />
                            <div className="card">
                                {data.users.nodes.map(
                                    (node: { name: string; email: string }) => (
                                        <ListItem
                                            name={node.name}
                                            email={node.email}
                                        />
                                    )
                                )}
                                {/* <ListItem
                                name="Dionísio Franco"
                                email="dio@gmail.com"
                            />
                            <ListItem
                                name="Dionísio Franco"
                                email="dio@gmail.com"
                            /> */}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}
