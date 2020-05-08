import * as React from 'react';
import logo from './logo.svg';
import './Hello.css';
// import { setInterval } from 'timers';

export interface Props{
    name: string;
    // The ? means that the attribute is not obligatory
    enthusiamsLevel: number;
    date: Date;
}

interface State{
    currentEnthusiasm: number;
}


export const HelloF = (props: Props) => {
    const [currentEnthusiasm, setCurrentEnthusiasm] = React.useState(props.enthusiamsLevel || 1);
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());


    const onIncrement = () => setCurrentEnthusiasm(currentEnthusiasm +1);
    const onDecrement = () => setCurrentEnthusiasm(currentEnthusiasm -1);
    // Abaixo é a mesma função do Arrow Function. O ganho do Arrow Function é justamente conseguir usar o this no escopo da função.
    // const funcOnDecrement = function() {}
    // const tick = () => setCurrentTime(new Date().toLocaleTimeString());
    const tick = () => setCurrentTime(new Date().toLocaleTimeString());
    React.useEffect( () => {
        setInterval(tick,1000)
    },[])
    // useEffect com [] = Didmount ; [state] = DidUptade
    // React.useEffect( ()=> {
    //     setCurrentTime(new Date().toLocaleTimeString());
    // }, [currentTime])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello A {props.name + Array(currentEnthusiasm+1).join('!')}
                </p>
                <p>
                    It is {currentTime}
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
                    Learn Reacts
                </a>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </header>
        </div>
    );

};

export class Hello extends React.Component<Props, State> {
    constructor (props: Props){
        // Permits access to parent constructo
        super(props);
        // Declare the initial state
        this.state = { currentEnthusiasm: props.enthusiamsLevel || 1}
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm +1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm -1);

    render() {
        if (this.state.currentEnthusiasm <= 0){
            throw new Error('You could be a little more enthusiastic. :D')
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Hello {this.props.name + Array(this.state.currentEnthusiasm+1).join('!')}
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
                    <div>
                        <button onClick={this.onDecrement}>-</button>
                        <button onClick={this.onIncrement}>+</button>
                    </div>
                </header>
            </div>
        );
    };

    updateEnthusiasm(currentEnthusiasm: number){
        this.setState({currentEnthusiasm})
    }
}



// function Hello(props: Props){
//     if (props.enthusiamsLevel <= 0){
//         throw new Error('You could be a little more enthusiastic. :D')
//     }

//     return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Hello {props.name + Array(props.enthusiamsLevel+1).join('!')}
//             </p>
//             {/* {props.list.map(x => (
//               <li>{x}</li>
//             ))} */}
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//       );
// }
