import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nev className="flex justify-between bg-[#333] h-20 items-center px-10 text-amber-50" >
        <h1 className='text-3xl'>Imam</h1>
        <label htmlFor="click" className='lg:hidden cursor-pointer'><i class="fa-solid fa-bars"></i></label>
        <input type="checkbox" id='click' className='hidden'/>
        <ul className='flex flex-col lg:flex-row gap-8 text-[20px] lg:static absolute  bg-[#df0d0d63] lg:bg-transparent w-full lg:w-100 top-20  p-10 hup'>
            <li className='cursor-pointer' ><Link to='/'>Home</Link></li>
            <li className='cursor-pointer'><Link to='/about'>About</Link></li>
            <li className='cursor-pointer'><Link to='/service'>Service</Link></li>
            <li className='cursor-pointer'><Link to='/contact'>Contact</Link></li>
          
        </ul>
    </nev>
  )
}

export default Nav