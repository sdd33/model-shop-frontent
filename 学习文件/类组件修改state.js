import './test.css'
import React from "react"

class TestComponent extends React.Component{
  state = {
    count : 0,
    list : [1,2,3]
  }
  addCount = () =>{
    this.setState({
      count : this.state.count+1
    })
  }
  changelist = () =>{
    this.setState({
      list : this.state.list.filter(item => item!=2)
    })
  }
  render() {
    return(
      <div>
        当前的值为：{this.state.count}
        <button onClick={this.addCount}>增加</button>
        表值为：{this.state.list.map(item => <li key={item}>{item}</li>)}
        <button onClick={this.changelist}>修改list</button>

      </div>
    )
  }
}


function App() {
  return (
    <>
      <TestComponent></TestComponent>
    </>
  );
}

export default App;
