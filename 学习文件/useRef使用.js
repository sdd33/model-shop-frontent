import { useEffect, useRef } from 'react'



function App() {
  const h1ref = useRef(null)
  useEffect(()=>{
    console.log(h1ref)
  },[])
  return (
    <div>
      <h1 ref={ h1ref }>this is h1</h1>
    </div>
  )
}

export default App






