import React from 'react'
import logo from './netflix-logo.svg'; 
import {signOut} from "firebase/auth";
import auth from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {addUser , removeUser} from "../utils/userSlice";

const Header = () => {

const navigate =useNavigate();
const dispatch = useDispatch();

const user = useSelector((store) => store.user);

const handleSignOut  = () =>{
signOut(auth)
.then(() => {
}).catch((error) => {
  navigate("/error")
 });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid , email ,displayName,photoURL } = user;
        dispatch(
          addUser({
           uid:uid ,
           email:email , 
           displayName:displayName,
           photoURL:photoURL
          })
        );
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate("/")
      }
    });
    //unsubscribe when component unmounts
    return  () => unsubscribe();
  },[])

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