import React from 'react';
import Operator from './Operator.js';
import Number from './Number.js';
import {numbers, firstOperators, secondOperators} from './data';
import Decimal from './Decimal.js'


class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      output : "",
    };

    this.clearValues=this.clearValues.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.handleDecimalNum = this.handleDecimalNum.bind(this);
  }

  clearValues(){
    this.setState({
      output : "0",
    });
  }

 handleInput(inputValue) {
  let newOutput = ""; 
  if(inputValue === "=")  {
    let result = eval(this.state.output);
    this.setState({
      output:`${result}`
    });
   } else if(["+","-","*","/"].includes(inputValue)){
    this.setState((prevState)=>{
      let prevOutput = String(prevState.output || "0"); 
      newOutput = prevOutput;
      let lastChar = prevOutput.slice(-1);
      
      if(["+","-","*","/"].includes(lastChar)){
        if(inputValue==="-" && lastChar!=="-"){
          newOutput+=inputValue;
        }
        else {
          //Getting ride of all the operators 
          // Case having multiple consecutive operators : apply the last operator
          let removesomeOp= prevOutput.slice(0,-1);
          while (["/","*","+","-"].includes(removesomeOp.slice(-1))){
            removesomeOp = removesomeOp.slice(0,-1);
          }
          newOutput = removesomeOp+inputValue;
        }
        return {output : newOutput};
      } else {
          newOutput= String(prevState.output) ==='0'  && inputValue !== "." ? inputValue:`${prevState.output}${inputValue}`;    
          return {output : newOutput};
      }
    })
  
   } else {
      this.setState((prevState) => {
        newOutput= String(prevState.output) ==='0'  && inputValue !== "." ? inputValue:`${prevState.output}${inputValue}`;
      
        return {output : newOutput};
    
  });}
}

handleDecimalNum(){
  this.setState((prevState)=>{
    let outputStr = String(prevState.output); 
    let parts = outputStr.split(/[+\-/*/]/);
    console.log(parts);
    let lastPart = parts[parts.length - 1];
    console.log(lastPart);
    if(lastPart.includes(".")){
      console.log("this isn't valid");
      return {};
    }



    return { output: prevState.output + "." };

  });
}

  render(){
    return (
      <div class="flex items-center justify-center h-full p-10" style={{height: "100vh !important" }} > 
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg mx-auto my-auto p-10" >
        <div id="display" className="mb-4 p-10 bg-pink-700 rounded-sm text-white items-start">{this.state.output}</div>
        
       
        <div className="p-4 max-wd-auto mx-auto">
          <div className="grid grid-cols-4 mb-3 gap-3">
            <button
            id="clear" className="col-span-2 bg-purple-200  rounded-full"
            onClick={this.clearValues}>
              clear
            </button>

            {secondOperators.map((operator)=>(
            <Operator
            key={operator.id}
            id={operator.id}
            value={operator.value}
            handleInput={this.handleInput}
            />
            ))}
          </div>

          <div className="grid-cols-4 grid gap-3  ">
            <div className="grid grid-cols-3 gap-3 col-span-3">
              {numbers.map((number)=>(
              <Number
              key={number.id}
                id={number.id}
                value={number.value} 
                handleInput={this.handleInput}
                />
              ))}
              <Decimal 
              handleDecimalNum={this.handleDecimalNum}  className="py-3" />
            </div>
              <div className='flex-col flex gap-3'>
              {firstOperators.map((operator)=>(
              <Operator
              key={operator.id}
              id={operator.id}
              value={operator.value}
              handleInput={this.handleInput}
              />
            ))}
          
              </div>
        
          </div>

        
       

        </div>
     
        </div>
      </div>
      
    );
  }
}

export default Calculator;