import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nev className="flex justify-between bg-[#333] h-20 items-center px-10 text-amber-50" >
        <h1 className='text-3xl'>Imam</h1>
        <ul className='flex gap-8 text-[20px]'>
            <li className='cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='cursor-pointer'><Link to='/about'>About</Link></li>
            <li className='cursor-pointer'><Link to='/service'>Service</Link></li>
            <li className='cursor-pointer'><Link to='/contact'>Contact</Link></li>
          
        </ul>
    </nev>
  )
}

export default Nav