import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '@/pages/login'
import Layout from './pages/layout'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/layout' element={<Layout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;
