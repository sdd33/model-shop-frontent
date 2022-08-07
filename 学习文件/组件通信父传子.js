import React from "react";

function Son1({msg,list,getMes}){
  return(
    <div>
    <div>函数子组件{msg}</div>
      <div>{list.map(item => <p key={item}>{item}</p>)}</div>
    <button onClick={getMes}>传入</button>
    </div>
  )
}

class App extends React.Component{
  state = {
    message: "this is a mes",
    list: [1,2,3]
  }

  getMes = () => {
    console.log('父组件中的函数')
  }

  render() {
    return(
      <div>
        <Son1 msg={this.state.message}
        list ={this.state.list}
        getMes = {this.getMes}/>
      </div>
    )
  }
}

export default App;
