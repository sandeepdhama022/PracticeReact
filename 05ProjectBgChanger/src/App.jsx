import { useState } from "react"

function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-250" style={{backgroundColor: color}}>
      <div className="fixed top-5 right-4">
        <div className="w-24 h-auto bg-white m-10 rounded-xl gap-4">
          <button
            onClick={()=>{setColor('red')}}
            className="outline-none px-4 py-1 m-1 rounded-xl"
            style={{backgroundColor:"red", color:'white'}}>
              Red
          </button>
          <button
            onClick={()=>{setColor('green')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"green", color:'white'}}>
              Green
          </button>
          <button
            onClick={()=>{setColor('blue')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"blue", color:'white'}}>
              Blue
          </button>
          <button
            onClick={()=>{setColor('olive')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"olive", color:'white'}}>
              Olive
          </button>
          <button
            onClick={()=>{setColor('yellow')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"yellow", color:'black'}}>
              Yellow
          </button>
          <button
            onClick={()=>{setColor('navy')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"navy", color:'white'}}>
              Navy
          </button>
          <button
            onClick={()=>{setColor('teal')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"teal", color:'white'}}>
              Teal
          </button>
          <button
            onClick={()=>{setColor('aqua')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"aqua", color:'black'}}>
              Aqua
          </button>
          <button
            onClick={()=>{setColor('gold')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"gold", color:'black'}}>
              Gold
          </button>
          <button
            onClick={()=>{setColor('grey')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"grey", color:'white'}}>
              Grey
          </button>
          <button
            onClick={()=>{setColor('pink')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"pink", color:'black'}}>
              Pink
          </button>
          <button
            onClick={()=>{setColor('purple')}}
            className="outline-none px-4 py-1 rounded-xl"
            style={{backgroundColor:"purple", color:'white'}}>
              Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
