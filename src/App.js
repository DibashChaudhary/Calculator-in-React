

import {Display} from "./components/Display"
import {BtnArea} from "./components/BtnArea"
import './App.css';
import { useState } from "react";

const operator  =["%", "*", "-", "+", "/"];
function App() {

const [strToDisplay, setStrToDisplay] = useState("");
const [lastOperator, setLastOperator] = useState("")

const [prank , setPrank] = useState(false)

const randomNumber = ()=>{
  const num = Math.round(Math.random()*10)

  return num ? num > 3 : num
}


const handleOnButtonClick = (val) =>{

  // console.log(val);
  // setStrToDisplay(strToDisplay + val);
  if (val === "AC"){
    return setStrToDisplay("");
  }
  if (val === "C"){
    return setStrToDisplay(strToDisplay.slice(0, -1));
  }
  if (val === "="){
    const lastChar = strToDisplay[strToDisplay.length -1]
    let temStr = strToDisplay;
    if(operator.includes(lastChar)){
      temStr = strToDisplay.slice(0, -1)
    }
    const extra = randomNumber();
    extra && setPrank(true);
    const total = eval(temStr) + extra

    return setStrToDisplay(total.toString())
  }

  if (operator.includes(val)){

    if (!strToDisplay){
      return;
    }

    let temStr= strToDisplay;
    const lastChar = strToDisplay[strToDisplay.length -1]

    if (operator.includes(lastChar)){
      temStr =strToDisplay.slice(0, -1);
    }

    setStrToDisplay(temStr + val)
    setLastOperator(val);
    return;

  }

  if (val === "."){

    if (!lastOperator){
     const operatorIndex = strToDisplay.lastIndexOf(lastOperator)
     const numbersAfterLastOperator = strToDisplay.slice(operatorIndex)
    
     if (numbersAfterLastOperator.includes(".")){
      return
     }
    }
    if  (!lastOperator && strToDisplay.includes(".")){
      return;
    }
  }
  
  setStrToDisplay(strToDisplay + val)

}



  return (
    <div >
     <div className="wrapper">
      <div className="calculator">
        {/* <div className="display">0.00</div> */}
        <Display strToDisplay={strToDisplay}/>

        {/* <div className="btn btn-ac">AC</div>
        <div className="btn btn-c">C</div>
        <div className="btn btn-perc">%</div>
        <div className="btn btn-divide">/</div>
        <div className="btn btn-7">7</div>
        <div className="btn btn-8">8</div>
        <div className="btn btn-9">9</div>
        <div className="btn btn-x">*</div>
        <div className="btn btn-4">4</div>
        <div className="btn btn-5">5</div>
        <div className="btn btn-6">6</div>
        <div className="btn btn-minus">-</div>
        <div className="btn btn-1">1</div>
        <div className="btn btn-2">2</div>
        <div className="btn btn-3">3</div>
        <div className="btn btn-plus">+</div>
        <div className="btn btn-0">0</div>
        <div className="btn btn-dot">.</div>
        <div className="btn btn-equals">=</div> */}


        

        <BtnArea handleOnButtonClick={handleOnButtonClick}/>
      </div>
      <div className="circle"></div>
    </div>
    </div>
  );
}

export default App;
