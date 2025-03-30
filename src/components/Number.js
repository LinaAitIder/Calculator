import React from "react";

class Number extends React.Component{
 
  render(){
    return(
       <button
        key={this.props.id}
        id={this.props.id} 
        onClick={()=>this.props.handleInput(this.props.value)}
         className="
         bg-gray-500/50 p-2 m-0
         hover:bg-gray-300 
         hover:text-black"
       >
        {this.props.value}
        </button>
    );
  }

}

export default Number;
