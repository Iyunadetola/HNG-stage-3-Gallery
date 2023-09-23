import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from '@firebase/auth' 
// import SignUp from './SignUp'

const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    function signInn(e) {
        e.preventDefault
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential)=>{
            navigate('/') 
        })
        .catch((error)=>{
            console.log(error)
            setErrorMessage(error.code)
            setTimeout(()=>{
                setErrorMessage('')
            }, 2000)
        })
    }

    return (
        <div className='signIn-container' >
            {/* <SignUp/> */}
        <div className='signIn' >
            <form action="" className='signInForm' >
                <label htmlFor="Login">Login</label> <br />
            {errorMessage && <p>{errorMessage}</p>}
                 <br />
                <input type="email" placeholder='Email' required onChange={(e) => { setLoginEmail(e.target.value) }} /> <br /> <br />
                <input type='password' placeholder='Password' required onChange={(e) => { setLoginPassword(e.target.value) }} /> <br />
                <button type="submit" onClick={signInn} >Login</button>
            </form>
            <Link to='/signUp' >Click here to create an account</Link>
        </div>
        </div>
    )
}

export default SignIn
