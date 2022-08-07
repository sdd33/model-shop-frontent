import React from "react";

function Son1({getMes}){
  return(
    <div>
        <button onClick={() => getMes('来自Son1的数据')}>获取子组件的值</button>
    </div>
  )
}
function Son2({Message}){
  return(
    <div>
      <p>{Message}</p>
    </div>
  )
}

class App extends React.Component{
  state = {
    sendMessage: '测试数据'
}

  getMes = (songMessage) => {
    console.log(songMessage)
    this.setState({
      sendMessage: songMessage
    })
  }

  render() {
    return(
      <div>
        <Son2 Message = {this.state.sendMessage}/>
        <Son1 getMes = {this.getMes}/>
      </div>
    )
  }
}

export default App;
