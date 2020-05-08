import React from 'react';
import logo from './logo.svg';
import './App.css';

// Create a second object that is used inside the Props.
export interface User{
  login: string;
  senha: string;
}

// Create object Props. This is the object that React identifys inside the function.
export interface Props{
  name: string;
  enthusiamsLevel: number;
  user?: User;
  list?: string[];
}

// Instead of using this. If uses props inside the parameter it becomes a shortcut to manipulate the object
// const { name } = props;
// const name = props.name;

function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {props.name + Array(props.enthusiamsLevel+1).join('!')}
        </p>
        {/* {props.list.map(x => (
          <li>{x}</li>
        ))} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
