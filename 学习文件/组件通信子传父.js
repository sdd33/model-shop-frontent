import React from "react";

function Son1({getMes}){
  function getmse(){
    getMes('来自子组件的值2')
  }
  return(
    <div>
      <div>
        <button onClick={() => getMes('来自子组件的值1')}>获取子组件的值</button>
      </div>
      <div>
        <button onClick={getmse}>获取子组件的值</button>
      </div>
    </div>
  )
}

class App extends React.Component{


  getMes = (songMessage) => {
    console.log(songMessage)
  }

  render() {
    return(
      <div>
        <Son1 getMes = {this.getMes}/>
      </div>
    )
  }
}

export default App;
