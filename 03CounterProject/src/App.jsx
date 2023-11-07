import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  function addValue(){
    if(counter <= 19){
      setCounter(counter + 1);
    }
  }

  function subtractValue(){
    if(counter >= 1){
      setCounter(counter - 1);
    }
  }


  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Remove Value</button>
    </>
  )
}

export default App
