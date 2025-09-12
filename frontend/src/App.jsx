import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'


function App() { 
  return (
    < >
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/candidate' element={<Candidate/>}></Route> */}
      <Route path='/admin' element={<Admin/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
