import './test.css'
import React,{createRef} from "react"

class TestComponent extends React.Component{
  myref = createRef();


  getvalue = () =>{
    console.log(this.myref.current.value)
  }

  render() {
    return(
      <div>
        <input
          type='text'
          ref={this.myref}
        />
        <button onClick={this.getvalue}>获取输入框值</button>


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
