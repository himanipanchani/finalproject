import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {

  const [fromData,setFromData] = useState({})

  const changeHandler = (event) => {
    setFromData({
      ...fromData,
      [event.target.id] : event.target.value
    })
  }

  const fromSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/auth/signup',{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(fromData)
    })
    const data = await res.json();
    console.log(data);
  }
  console.log(fromData)
  
  return (
    <div className='flex justify-center'>
      <div className='lg:w-1/4 md:w-1/3 sm:w-full'>
        <div className='text-center pt-9'>
          <h1 className='text-2xl'>Sign-up</h1>
          <form onSubmit={fromSubmitHandler}>
            <div>
              <input type='text' placeholder='Enter Your Name' className='border-2 p-3 m-3 w-full' onChange={changeHandler} id='name'></input>
            </div>

            <div>
              <input type='email' placeholder='Enter Email' className='border-2 p-3 m-3 w-full' onChange={changeHandler} id='email'></input>
            </div>

            <div>
              <input type='text' placeholder='Enter Password' className='border-2 p-3 m-3 w-full' onChange={changeHandler} id='password'></input>
            </div>

            <button className='border-2 p-3 m-3 w-full bg-sky-600 hover:bg-sky-800'           type='submit'>
              Sign-Up
            </button>

            <h4 className='text-left ps-4'>Have an account ? <Link className='text-teal-500' to="/sign-in">Sign-In</Link></h4>
          </form>
          
        </div>
      </div>
    </div>
  )
}
