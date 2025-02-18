import React, { useState ,useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux'


const Login = () => {

const[isSignIn , setIsSignIN] = useState(true);
const[errorMessage , setErrorMessage] = useState(null);
const navigate = useNavigate();
const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);


const handleButtonClick = () => {
    //Validate the form data
   const message = checkValidateData(email.current.value , password.current.value);
   setErrorMessage(message);
   if(message) return ;

   if(!isSignIn){
    createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const { uid , email ,displayName,photoURL } = auth.currentUser;
       dispatch(
          addUser({
            uid:uid ,
            email:email , 
            displayName:displayName, 
            photoURL:photoURL
          })
        );
      navigate("/browse")
    }).catch((error) => {
      setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
   }else{
    signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

   }

}

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
        <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black text-white my-40 mx-auto right-0 left-0 bg-opacity-85 '>
            <h1 
             className='font-bold text-3xl py-4'>
             {isSignIn ?  "Sign In" : "Sign UP"}
            </h1>
            {(!isSignIn && 
            <input
            ref={name}
             type='text'
             placeholder='Full Name' 
             className='p-4 my-4 w-full bg-gray-700'
            />)}
            <input 
             ref={email}
             type='text'
             placeholder='email address'
             className='p-4 my-4 w-full bg-gray-700'
            />
            <input
             ref={password}
             type='password'
             placeholder='password' 
             className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button 
             className='p-4 my-6 bg-red-700 w-full rounded-lg'
             onClick={handleButtonClick}
             >
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