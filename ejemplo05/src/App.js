import { Component } from "react";
import ListaProductos from "./Components/ListaProductos";

class App extends Component{
  state = {
    productos: [
      {nombre: 'Manzana', previo: 1.5, imagen: 'img/manzana.jpg'},
      {nombre: 'Tomate', previo: 0.5, imagen: 'img/tomate.jpg'},
      {nombre: 'Uva', previo: 0.25, imagen: 'img/uva.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <h1>Titulo</h1>
        <ListaProductos lista={this.state.productos}></ListaProductos>
      </div>
    )
  }
}

export default App