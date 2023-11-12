import { useState } from "react"

function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-250" style={{backgroundColor: color}}>
      <div className="fixed top-10 right-5">
        <div className="rounded-xl gap-4" style={{backgroundColor:"white"}}>
          <button
            onClick={()=>{setColor('red')}}
            className="outline-none px-4 py-1 mx-6 my-1 mt-4 rounded-xl"
            style={{backgroundColor:"red", color:'white'}}>
              Red
          </button><br />
          <button
            onClick={()=>{setColor('green')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"green", color:'white'}}>
              Green
          </button><br />
          <button
            onClick={()=>{setColor('blue')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"blue", color:'white'}}>
              Blue
          </button><br />
          <button
            onClick={()=>{setColor('olive')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"olive", color:'white'}}>
              Olive
          </button><br />
          <button
            onClick={()=>{setColor('yellow')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"yellow", color:'black'}}>
              Yellow
          </button><br />
          <button
            onClick={()=>{setColor('navy')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"navy", color:'white'}}>
              Navy
          </button><br />
          <button
            onClick={()=>{setColor('teal')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"teal", color:'white'}}>
              Teal
          </button><br />
          <button
            onClick={()=>{setColor('aqua')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"aqua", color:'black'}}>
              Aqua
          </button><br />
          <button
            onClick={()=>{setColor('gold')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"gold", color:'black'}}>
              Gold
          </button><br />
          <button
            onClick={()=>{setColor('grey')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"grey", color:'white'}}>
              Grey
          </button><br />
          <button
            onClick={()=>{setColor('pink')}}
            className="outline-none px-4 py-1 mx-6 my-1 rounded-xl"
            style={{backgroundColor:"pink", color:'black'}}>
              Pink
          </button><br />
          <button
            onClick={()=>{setColor('purple')}}
            className="outline-none px-4 py-1 mx-6 my-1 mb-4 rounded-xl"
            style={{backgroundColor:"purple", color:'white'}}>
              Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
