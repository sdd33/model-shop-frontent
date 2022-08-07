import './test.css'
import React from "react"

class TestComponent extends React.Component{
  state = {
    message:"this is a message"
  }


  inputChange = (e) =>{
    console.log("输入的值为：")
    console.log(e.nativeEvent.data)
  }

  render() {
    return(
      <div>
        <input
          type='text'
          // value={this.state.message}
          onChange={this.inputChange}
        />


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
