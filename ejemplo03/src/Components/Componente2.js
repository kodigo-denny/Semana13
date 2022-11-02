import { Component } from "react";

class Componente2 extends Component{

    componentWillUnmount(){
        console.log('WillUmount Componente 2')
    }

    render(){
        return(
            <div>
                <h1>Hola mundo</h1>
            </div>

        )
    }
}

export default Componente2