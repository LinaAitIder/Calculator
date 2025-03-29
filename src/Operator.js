import React from "react";
class Operator extends React.Component {
  render(props){
    return(
        <button id={this.props.id} onClick={()=>this.props.handleInput(this.props.value)}>{this.props.value}</button>
      )
  }
}

export default Operator;