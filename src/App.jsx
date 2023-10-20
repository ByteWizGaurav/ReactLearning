import { useState, useCallback } from 'react'
import './App.css'

function App() {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [result, setResult] = useState("teri maa bhajiya tale");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [copyBtn, setCopyBtn] = useState("Copy");
  let password = "";

  const passwordGenerator = useCallback(() => {
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*()_-+={}[]:;,.|/<>?";
    
    for(let index = 0; index < length; index++){
      let charIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(charIndex);
    }
    // console.log(password);
    setResult(password);
    password = "";
  }, [numAllowed, charAllowed, length])

  const copyTheData = () => {
    window.navigator.clipboard.writeText(result);
    setCopyBtn("Copied");
    setTimeout(() => {
      setCopyBtn("Copy");
    }, 2000);
  }


  return (
    <>
      <div className="card">

        <h1>Password Generator</h1>
        <div className="generator">
          <p>
          <input type="text" value={result} readOnly/>
          <button onClick={copyTheData}>{copyBtn}</button>
          </p>
          <p>
            <input type="range" value={length} onChange={(e)=> setLength(e.target.value)} min={4} max={20}/>
            <span>Length: {length}</span>
          </p>
          <div className="btns">
            <input type="checkbox" onChange={()=> setNumAllowed((pre) => !pre)}/> Number
            <input type="checkbox" onChange={()=> setCharAllowed((pre) => !pre)}/> Symbols
          </div>
          <button onClick={passwordGenerator} >daal de</button>
        </div>
      </div>
    </>
  )
}

export default App
