import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    names: ["Ahmed", "Abullah", "Aya"]
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>

        <h1>Hello</h1>
        <p>
          class component
        </p>
        <p>counter value :</p>
        <p>{this.state.counter}</p>
        <ul>
          {
            this.state.names.map(name => <li key={name}>my name is : {name}</li>)
          }
        </ul>
        <button onClick={this.onClick}> increment</button >
      </div>
    );
  }
}

export default App;

