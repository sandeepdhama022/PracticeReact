import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center text-center font-bold border-4 mt-4 w-80'>
        <h1>Sandeep Dhama</h1>
      </div>
    </>
  )
}

export default App
