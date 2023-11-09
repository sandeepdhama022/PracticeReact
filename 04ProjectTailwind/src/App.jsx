import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

const img1 = "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg"

const img2 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-400 p-4 rounded-xl mb-5">
        My Cards
      </h1>
      <Card name='Sandeep Dhama' btnText='Open Web' image={img1} />
      <Card name='Lalita Dhama' btnText='Click Me' image={img2} />
      
    </>
  )
}

export default App
