import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  return (
    <>
      <div className='w-full max-w-2xl mx-auto my-10 p-5 rounded-xl bg-gray-800 text-white text-center'>
        <h1 className='text-4xl text-white'>Password Generator</h1>
        <input type="text" className='w-96 my-5 mx-1 p-2 rounded-md text-red-600' />
        <button className='bg-red-600 text-white p-2 rounded-md'>Copy</button><br />
        <input type="range" name="length" id="length" min={'4'} max={'50'} />
        <label htmlFor="length" className='mx-2'>Length</label>
        <input type="checkbox" name="num" id="num" className='mx-2' />
        <label htmlFor="num">Numbers</label>
        <input type="checkbox" name="char" id="char" className='mx-2' />
        <label htmlFor="char">Characters</label>
      </div>
    </>
  )
}

export default App
