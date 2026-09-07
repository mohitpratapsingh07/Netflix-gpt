import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const toggleSignUpform = () => {
    setIsSignup(!isSignup)
  }
  return (
    <div  >
        <Header/>
        <div className='absolute'  >
            <img className=" brightness-50 " src='https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg' alt='bg-img'/>
        </div>
        <form className="bg-black text-white absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 opacity-80 rounded-md ">
            <h1 className='text-3xl font-bold py-4'>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
            {isSignup && (
                <input type='text' placeholder='First Name' className='p-2 my-4 w-full bg-zinc-700 rounded'/>
            )}
            <input type='email' placeholder='Email Address' className='p-2 my-4 w-full bg-zinc-700 rounded'/>
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-zinc-700 rounded'/>
            <button className='bg-red-600  p-2 my-6 w-full rounded cursor-pointer'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            {isSignup?<p onClick={toggleSignUpform} className='py4 cursor-pointer'>Already have an account? <span className='cursor-pointer hover:underline'>Sign in</span>.</p>:<p onClick={toggleSignUpform} className='py-4 cursor-pointer'>New to Netflix? <span className='cursor-pointer hover:underline'>Sign up now</span>.</p>}
            
        </form>
    </div>
  )
}

export default Login