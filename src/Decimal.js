import React from "react"

function Decimal({handleDecimalNum}){

  return(
    <button id="decimal" onClick={()=>handleDecimalNum()}>
      .
    </button>
  );

}





export default Decimal;