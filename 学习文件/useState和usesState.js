import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(0)

  useEffect(() => {
    console.log('副作用执行了1')
  }, [count])
  useEffect(() => {
    console.log('副作用执行了2')
  }, [name])

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <button onClick={() => { setName(name + 1) }}>{name}</button>
    </>
  )
}


export default App





