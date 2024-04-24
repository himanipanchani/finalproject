import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='bg-slate-200 shadow-sm'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

          <div className='items-center'>
            <h1 className='text-5xl p-4'>Avenue Realty</h1>
          </div>

          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64"></input>
          </form>

          <ul className='flex gap-4 justify-self-end	'>
              <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
              <Link to="/about" ><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
              <Link to="/sign-in"><li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li></Link>
          </ul>
        </div>
      </header>
    </div>
  )
}
