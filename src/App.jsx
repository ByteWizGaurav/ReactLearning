import { useState } from 'react'
import './App.css'

function App() {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [result, setResult] = useState("terimaabhajiyatale");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  let length = 8;
  let password = "";

  function passwordGenerator(){
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*()_-+={}[]:;,.|/<>?";
    
    for(let index = 0; index < length; index++){
      let charIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(charIndex);
    }
    console.log(password);
    setResult(password);
    password = "";
  }

  passwordGenerator()

  return (
    <>
      <div className="card">

        <h1>Password Generator</h1>
        <div className="generator">
          <p>
          <input type="text" value={result} readOnly/>
          <button>Copy</button>
          </p>
          <p>
            <input type="range" />
          </p>
          <div className="btns">
            <input type="checkbox" /> Number
            <input type="checkbox" /> Symbols
          </div>
          <button onClick={passwordGenerator} style={{background: "green"}}>daal de</button>
        </div>
      </div>
    </>
  )
}

export default App
