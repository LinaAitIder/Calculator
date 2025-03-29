import React from "react";

class Number extends React.Component{
 
  render(){
    return(
       <button
        key={this.props.id}
        id={this.props.id} 
        onClick={()=>this.props.handleInput(this.props.value)}
        
       >
        {this.props.value}
        </button>
    );
  }

}

export default Number;
