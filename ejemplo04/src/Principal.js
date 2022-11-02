import { Component } from "react";
import Campo from "./Campo";

class Principal extends Component{
    state = {nombre:'', apellido:''}

    render(){
        return(
            <div>
                <b>Nombre completo: {this.state.nombre} {this.state.apellido}</b>

                <div className="row">
                    <Campo id="nombre" col={6} onChange={e => this.setState({nombre: e.target.value})}>Nombre: </Campo>
                    <Campo id="apellido" col={6} onChange={e => this.setState({apellido: e.target.value})}>Apellido: </Campo>
                </div>
                
            </div>
        )
    }
}

export default Principal