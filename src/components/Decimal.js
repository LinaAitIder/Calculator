import React from "react"

function Decimal({handleDecimalNum}){

  return(
    <button id="decimal" 
    onClick={()=>handleDecimalNum()}
    className="bg-gray-500/50 p-2 m-0 hover:bg-gray-300 
    hover:text-black">
      .
    </button>
  );

}





export default Decimal;