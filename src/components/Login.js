import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const[isSignIn , setIsSignIN] = useState(true);

const toggleSignInForm = () =>{
    setIsSignIN(!isSignIn)
}
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
            src=
            'https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg' alt='logoo'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black text-white my-40 mx-auto right-0 left-0 bg-opacity-85 '>
            <h1 
             className='font-bold text-3xl py-4'>
             {isSignIn ?  "Sign In" : "Sign UP"}
            </h1>
            {(!isSignIn && <input
             type='text'
             placeholder='Full Name' 
             className='p-4 my-4 w-full bg-gray-700'
            />)}
            <input 
             type='text'
             placeholder='email address'
             className='p-4 my-4 w-full bg-gray-700'
            />
            <input
             type='text'
             placeholder='password' 
             className='p-4 my-4 w-full bg-gray-700'
            />
            <button 
             className='p-4 my-6 bg-red-700 w-full rounded-lg'>
             {isSignIn ?  "Sign In" : "Sign UP"}
            </button>
            <p 
            className='py-4 cursor-pointer'
            onClick={toggleSignInForm}
            >
               {isSignIn ?  "New to Netflix? Sign Up Now" : "Already Regisreed? Sign In"}
            </p>
        </form>
    </div>

  )
}

export default Login