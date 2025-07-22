import { Bell, Home, MessagesSquare } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className="flex items-center p-4 fixed top-0 left-0 right-0 z-50 mb-4 w-full bg-white shadow-md justify-between">
      <h1 className="text-lg font-semibold text-blue-400">REI Search</h1>
      <span className='flex items-center w-100'> <Home /><input type="text" placeholder="Search..." className="ml-4 p-2 border rounded-lg flex-3 max-w-96" /></span>
      <div className='flex items-center gap-4 hidden md:flex'> 
        <MessagesSquare className='text-blue-500 w-6 h-6 ml-4' />
        <Bell className='fill-current text-yellow-400 w-6 h-6 ml-4' />
        <button className='p-2 border rounded px-8' >Jhone</button>
      </div>

    </div>
  )
}


export default Header