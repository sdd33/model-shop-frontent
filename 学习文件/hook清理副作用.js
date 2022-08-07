import { useEffect,useState } from "react"

function Foo() {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('副作用函数执行了')
    }, 1000)
    return () => {
      console.log('清理副作用的函数执行了')
      clearInterval(timerId)
    }
  })
  return <div>Foo</div>
}

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      <button onClick={() => setFlag(false)}>click</button>
      {flag ? <Foo/> : null}
    </div>
  )
}
export default App





