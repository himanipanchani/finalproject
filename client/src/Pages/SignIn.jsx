import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
  <div className='flex justify-center'>
    <div className='lg:w-1/4 md:w-1/3 sm:w-full'>
      <div className='text-center pt-9'>
        <h1 className='text-2xl'>Sign-In</h1>

        <div>
          <input type='email' placeholder='Enter Email' className='border-2 p-3 m-3 w-full'></input>
        </div>

        <div>
          <input type='text' placeholder='Enter Password' className='border-2 p-3 m-3 w-full'></input>
        </div>

        <Link>
          <button className='border-2 p-3 m-3 w-full bg-sky-600 hover:bg-sky-800'>
            Sign-In
          </button>
        </Link>

        <h4 className='text-left ps-4'>Have an account ? <Link className='text-teal-500' to="/sign-up">Sign-Up</Link></h4>

      </div>
    </div>
  </div>
  )
}
