import { useState } from "react"

function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <div className="flex flex-wrap justify-center gap-4 bg-white rounded-xl px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"red", color:"white"}}>
              Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"green", color:"white"}}>
              Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
