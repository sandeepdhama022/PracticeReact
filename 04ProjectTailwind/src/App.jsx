import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-400 p-4 rounded-xl mb-5">
        Hello world!
      </h1>
      <Card name='Sandeep Dhama' btnText='Open Web' />
      <Card name='Lalita Dhama' btnText='Click Me' />
      
    </>
  )
}

export default App
