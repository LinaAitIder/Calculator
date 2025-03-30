import React from 'react';
import Operator from './Operator.js';
import Number from './Number.js';
import {numbers, firstOperators, secondOperators} from '../data/data';
import Decimal from './Decimal.js'


class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      output : " ",
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
      //The case where the final input is an op
      this.setState((prevState)=>{
        let lastInput = prevState.output.slice(-1);
        if(["+","-","*","/"].includes(lastInput)){
          this.output = prevState;
        } else {
          let result = eval(this.state.output)!==undefined ? eval(this.state.output) : " ";
          return {output : `${result}`};

        }
      })
      
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
      <div class="flex flex-col items-center justify-center h-full p-10  " style={{height: "100vh !important" }} > 

        <div className="w-96 bg-white shadow-lg rounded-lg mx-auto my-auto p-10 font-medium text-xl drop-shadow-xl" >

          <div id="display" className="mb-4 p-8  pl-3 text-white bg-sky-700 flex items-start font-small">{this.state.output}</div>
        
          <div className="p-1 m-4
          max-wd-auto mx-auto text-white ">

            <div className="grid grid-cols-4 mb-1 gap-1 ">

              <button
              id="clear" className="col-span-2 p-4 bg-sky-900   hover:bg-gray-300 focus:outline-2 
              hover:text-black
              "
              onClick={this.clearValues}>
                C
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

            <div className="grid-cols-4 grid gap-1  ">
              <div className="grid grid-cols-3 gap-1 col-span-3">
                {numbers.map((number)=>(
                <Number
                key={number.id}
                  id={number.id}
                  value={number.value} 
                  handleInput={this.handleInput}
                  />
                  
                ))}

                <div className="col-span-2  justify-center bg-sky-900  
                hover:bg-gray-300 
                hover:text-black">

                  <Number
                  id="zero"
                  value="0"
                  handleInput={this.handleInput}
                />
                </div>

                
                <Decimal 
                handleDecimalNum={this.handleDecimalNum} />

              </div>
          
                <div className='flex-col flex gap-1'>
                  {firstOperators.map((operator)=>(
                  <Operator
                  key={operator.id}
                  id={operator.id}
                  value={operator.value}
                  handleInput={this.handleInput}
                  />  
                  ))}
                  <div
                    className=" flex h-full  justify-center bg-sky-900
                    hover:bg-gray-300 
                    hover:text-black "
                  >
                    <Operator
                      id="equals"
                      value="="
                      handleInput={this.handleInput}
                    />
                  </div>
                </div>
            </div>
          </div>

        </div>
        <div className="italic  font-medium">Created By Lina Ait Ider</div>
      </div>
      
    );
  }
}

export default Calculator;