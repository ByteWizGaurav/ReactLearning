import { useState } from 'react'
import InputBox from './InputBox'
import './App.css'


function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  const [to, setTo] = useState(1);

  return (
    <>
      <div className="grid place-content-center h-screen bg-slate-500">
        <div className='container p-4 bg-sky-800 grid gap-5 rounded-md'>
          <InputBox label="From" currency="usd" value={amount} setValue={setAmount}/>
          <InputBox label="To" currency="inr" value={convertedAmount} setValue={setConvertedAmount} convert={setTo}/>
        </div>
      </div>
    </>
  )
}

export default App
