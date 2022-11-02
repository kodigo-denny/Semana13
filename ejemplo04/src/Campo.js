import { Component } from "react";

class Campo extends Component{
    state = {estilo: 'form-group col-12'}

    componentDidMount(){
        
        if(this.props.col!=undefined)
            this.setState({estilo: 'form-group col-'+this.props.col})
    }

    render(){
        const {children,value, id, col, onChange} = this.props;
        
        return(
            
            <div className={this.state.estilo}>
                <label className="form-label"><b>{children}</b></label>
                <input className="form-control" id={id} value={value} onChange={onChange}></input>
            </div>
        )
    }
}

export default Campo