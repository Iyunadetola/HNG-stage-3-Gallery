import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth'
import { auth } from '../firebase-config';

const Input = () => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })





  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    } catch (error) {
      console.log(error.message)
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    } catch (error) {
      console.log(error.message)
    }
  };
  const logOut = async () => {
    await signOut(auth)
  };

  return (
    <div>
      <div>
        <label htmlFor="register-user">Register User</label>
        <input type="email" placeholder='Email' onChange={(e) => { setRegisterEmail(e.target.value) }} />
        <input type='password' placeholder='Password' onChange={(e) => { setRegisterPassword(e.target.value) }} />
        <button type="submit" onClick={register} >Create User</button>
      </div>
      <div>
        <label htmlFor="Login">Login</label>
        <input type="email" placeholder='Email' onChange={(e) => { setLoginEmail(e.target.value) }} />
        <input type='password' placeholder='Password' onChange={(e) => { setLoginPassword(e.target.value) }} />
        <button type="submit" onClick={login} >Login</button>
      </div>
      <div>
        <label htmlFor="User Logged In">User Logged In:</label>
        {user?.email}

        <button type="submit" onClick={logOut} >Sign Out</button>


      </div>
    </div>
  )
}

export default Input