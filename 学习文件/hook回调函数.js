import { useState } from "react"

function Counter(props){
  const [count,setCount] = useState(()=>{
    return props.count
  })
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter count={10}></Counter>
    </div>
  )
}


export default App





