import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()
function Foo() {
  return(
    <div>
      Foo
      <Bar/>
      <p>???</p>
    </div>
  )
}

function Bar() {
  // 底层组件通过useContext函数获取数据
  const name = useContext(Context)
  return <div>Bar {name}</div>
}

function App() {
  return (
    // 顶层组件通过Provider 提供数据
    <Context.Provider value={'this is name'}>
      <div><Foo/></div>
    </Context.Provider>
  )
}

export default App






