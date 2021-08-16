import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const ShowResult = (event)=>{
    setResult((amount*From)/To)
  }
  const convert =(event)=>{
    setAmount(event.target.value)
    }
    const onFromCHange =(event)=>{
      console.log(event.target.value)
      setFrom(event.target.value)
    }
    const onToChange = (event)=>{
      setTo(event.target.value)
    }
  
  const [result, setResult] = useState(0);
  const[amount,setAmount]=useState(0);
  const [From, setFrom] = useState(1);
  const [To, setTo] = useState(1);
/* Selects with labels "From" and "To" here */
  return (
    <>
      <div className="converter-form">
        <Input label='Amount' onChange={convert}  /> 

        <div className="row">
        <Select label='From' items={units} onChange={onFromCHange} />
          <Select label='To' items={units} onChange={onToChange}/>

          <button onClick={ShowResult}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}


export default App;
