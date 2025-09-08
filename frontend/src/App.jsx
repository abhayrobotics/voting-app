import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vote from './pages/Vote'
import Candidate from './pages/Candidate'
import Login from './pages/Login'


function App() { 
  return (
    < >
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/vote' element={<Vote/>}></Route>
      <Route path='/candidate' element={<Candidate/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
