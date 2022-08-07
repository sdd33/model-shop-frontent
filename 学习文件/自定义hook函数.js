import { useWindowScroll } from './hooks/useWindowScroll'
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [y] = useWindowScroll()
  const [message,setmessage] = useLocalStorage('hook-key','阿菲')
  setTimeout(()=>{
    setmessage('邓林威')
  },5000)
  return (
    <div style={{'height' : '12000px'}}>
      {y}
      {message}
    </div>
  )
}


export default App





