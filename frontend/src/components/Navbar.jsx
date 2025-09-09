import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        
   <nav className='flex justify-between px-4 border border-amber-100 py-2 w-full'>
        <Link to="/" ><div className='cursor-pointer'>Voting app</div></Link>
        <div className='flex justify-between '>
          <Link to = "/candidate"><div className='px-2 cursor-pointer'>  Add candidate</div></Link>
          <Link to = "/vote"><div className='px-2 cursor-pointer'> Vote</div></Link>
          <Link to = "/login"><div className='px-2 cursor-pointer'> Login</div></Link>
        </div>
      </nav>
      </div>
  )}

  export default Navbar