import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[buttonType,setButtonType]=useState("green")

//setInterval()
//setTimeout(()=>{
//setData(data+1)
// },1000)

 /*setInterval(()=>{
  setValue(value+1)
   },1000)*/
  
  return (
    <div className="App">
      <button onClick={()=>{setButtonType("green")}}>on</button>
      <button style={{backgroundColor:`${buttonType}`}}>{buttonType!="red"?"on":"off"}</button>
      <button onClick={()=>{setButtonType("red")}}>off</button>
    </div>
  );
}

export default App;
