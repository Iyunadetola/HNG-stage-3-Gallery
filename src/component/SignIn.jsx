import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from '@firebase/auth' 

const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate()

    function signInn(e) {
        e.preventDefault
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential)=>{
            navigate('/') 
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='signIn' >
            <form action="">
                <label htmlFor="Login">Login</label> <br /> <br />
                <input type="email" placeholder='Email' onChange={(e) => { setLoginEmail(e.target.value) }} /> <br /> <br />
                <input type='password' placeholder='Password' onChange={(e) => { setLoginPassword(e.target.value) }} /> <br />
                <button type="submit" onClick={signInn} >Login</button>
            </form>
        </div>
    )
}

export default SignIn
