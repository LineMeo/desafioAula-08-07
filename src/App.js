import React, { Component } from "react";

class App extends Component{
  state = {
    nome: ['Paulinha', 'Isaque', 'Aline', 'Dyana', 'Helio', 'Nikolas']
  }
  render(){
    return (
      <div>
        <h1>{this.state.nome[0]}</h1>
        <h2>{this.state.nome[1]}</h2>
        <h3>{this.state.nome[2]}</h3>
        <h4>{this.state.nome[3]}</h4>
        <h5>{this.state.nome[4]}</h5>
        <h6>{this.state.nome[5]}</h6>
      </div>
    )
  }
}

export default App;