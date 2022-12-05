import { useState } from "react"


const Counter = () => {
     const [count, setcount] = useState(0)
  return (
    <>
   <h1 style={{color: "#fff"}}>Counter value : {count} </h1>
     <button>Reset counter</button>
     <button onClick={()=>(count > 10 ? "": setcount(count + 1))}>Increase counter</button>
     <button onClick={()=>setcount(count - 1)}>Decrease counter</button>

    </>
  )
}

export default Counter