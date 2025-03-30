import React from "react";
class Operator extends React.Component {
  render(){
    return(
        <button id={this.props.id} onClick={()=>this.props.handleInput(this.props.value)} 
         className={`
        ${this.props.id ==="equals"? "bg-transparent" : "bg-gray-500/50"} 
         p-2 m-0
         hover:bg-gray-300 
         hover:text-black`}
       >
        
        {this.props.value}</button>
      )
  }
}

export default Operator;