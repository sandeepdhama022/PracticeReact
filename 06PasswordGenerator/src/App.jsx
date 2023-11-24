import { useCallback, useState, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(4)
  const [password, setPassword] = useState("")
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$_+-*/~'
    }
    console.log(numAllowed);
    console.log(charAllowed);
    for (let i = 1; i <= length; i++) {
      let charNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charNum)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto my-10 p-5 rounded-xl bg-gray-800 text-white text-center'>
        <h1 className='text-4xl text-white'>Password Generator</h1>
        <input type="text" className='w-96 my-5 mx-1 p-2 rounded-md text-red-600' readOnly placeholder='Password' value={password} />
        <button className='bg-red-600 text-white p-2 rounded-md'>Copy</button><br />
        <input type="range" name="length" id="length"
        min={'2'} max={'50'}
        onChange={(e)=>{setLength(e.target.value)}} />
        <label htmlFor="length" className='mx-2'>Length ({length})</label>
        <input type="checkbox" name="num" id="num" className='mx-2'
        onChange={()=>{setNumAllowed((prev) => !prev)}}/>
        <label htmlFor="num">Numbers</label>
        <input type="checkbox" name="char" id="char" className='mx-2'
        onChange={()=>{setCharAllowed((prev) => !prev)}}/>
        <label htmlFor="char">Characters</label>
      </div>
    </>
  )
}

export default App
