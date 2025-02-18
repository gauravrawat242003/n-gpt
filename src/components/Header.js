import React from 'react'
import logo from './netflix-logo.svg'; 
import {signOut} from "firebase/auth";
import auth from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {

const navigate =useNavigate();

const user = useSelector((store) => store.user);

const handleSignOut  = () =>{
signOut(auth)
.then(() => {
  navigate("/")
}).catch((error) => {
  navigate("/error")
 });

  }
  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-white z-10'>
        <img className='w-44'
         src={logo} 
        alt='logo'/>
        { user && <div>
          <button onClick={handleSignOut} className='font-bold'>Sign Out</button>
        </div>}
    </div>

  )
}

export default Header