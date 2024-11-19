import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
    state = {
      name: 'Marcos',
      counter: 0    
  }
  
  handlePClick = () =>{  
    const {counter} = this.state;
    this.setState({counter: counter + 1});  
    this.setState({name: 'Fabrício'});
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});   

    this.setState({name: 'Ana'})
  }

  render() {
    const {name, counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <p>Contador: {counter}</p>
          <p>Nome: {name}</p>
          <p onClick={this.handlePClick}>Clique aqui... </p>
          <a onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprendendo React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá Mundo!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
