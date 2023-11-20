import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-40 text-center'>
        <input type="text" name="password" className='p-2' />
      </div>
    </>
  )
}

export default App
