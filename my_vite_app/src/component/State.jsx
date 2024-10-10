import { Component } from "react";




class State_sample extends Component{
    constructor(){
        super()
        this.state={color:"red",width:"200px"}
    }
    render(){
        return(
            <h2>State- {this.state.color}{this.state.width}</h2>
        )
    }
}

export default State_sample