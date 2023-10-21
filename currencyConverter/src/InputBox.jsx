import React, {useState} from 'react'

function fetchData(currency, setData){
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then(res => {
      setData(res[currency]);
    })
}

function InputBox(props) {
  const [data, setData] = useState([]);
//   fetchData("inr", setData);
  const keys = Object.keys(data);
  return (
    <div>
        <label htmlFor="something" className='text-white'>{props.label}</label>
        <select name="options" id="options" className='float-right px-1 rounded-md foucs:outline-none hover:cursor-pointer'>
            {keys.map((key) => {
                if(key==props.currency) return <option value={key} selected>{key}</option>
                else return <option value={key}>{key}</option>
            })}
        </select>
        <input type="number" id="something" 
        value={props.value} 
        onChange={e => props.setValue(Number(e.target.value))}
        className='w-full px-3 py-1 mt-3 rounded focus:outline-none'
        />
    </div>
  )
}

export default InputBox