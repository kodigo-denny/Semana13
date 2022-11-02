import { Component } from "react";
import Componente2 from "./Componente2";

class Componente1 extends Component {

    state = {numero: 0, contador: 1, eliminado: false}

    constructor(props){
        super(props);
        console.log('Constructor', props);
    }

    componentDidMount(){
        console.log('DidMount', this.props);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate prevProps', prevProps)
        console.log('DidUpdate prevState', prevState)
        console.log('DidUpdate Estado actual', this.state)
    }

    componentWillUnmount(){
        console.log('DidUnMont')
    }

    render(){
        const {children, id, valor} = this.props;
        console.log('Render', this.props);
        return(
            <div>
                <h1>{children==null ? 'Campo vacio' : children} {this.state.numero}</h1>
                <button onClick={() => this.setState({numero: this.state.numero+1})}>Cambiar estado</button>
                <button onClick={() => this.setState({contador: 10})}>Cambiar estado</button>
                {this.state.eliminado==false? <Componente2></Componente2> : null}
                <button onClick={() => this.setState({eliminado: true})}>Eliminar</button>
            </div>
        )
    }
}

export default Componente1