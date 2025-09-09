import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Candidate from './pages/Candidate'
import Login from './pages/Login'


function App() { 
  return (
    < >
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/candidate' element={<Candidate/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
