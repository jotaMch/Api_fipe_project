import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jsonData: null,
      selectedMarca: ""
    }
  }
  
  
  componentDidMount() {
    const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
    const response = fecth(url)
        .then(response=>response.json())
        .then(data=> data)
        this.state.setState({jsonData: response})    
  }


  handleSelectedChange = (event) => {
    this.setState({ selectedMarca: event.target.value })
    console.log("Valor selecionado:", this.state.selectedMarca);
  }

  render() {
    return (
      <div className="App">
        <p>pp{/* {JSON.stringify(this.state.jsonData)} */}</p>
        
        <select 
        value={this.setState.selectedMarca} 
        onChange={this.handleSelectedChange}
        >
          {this.state.jsonData && this.state.jsonData.map(marca => (
            <option key={marca.id} value="">{marca.nome}</option>
          ))}
        </select>
        <p>Valor selecionado: {this.state.selectedMarca}</p>

      </div>
    )
  }
}
