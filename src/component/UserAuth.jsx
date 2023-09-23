import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { auth } from '../firebase-config'
const UserAuth = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, user => {
            if (user) {
                return 
            } else {
                navigate('/signIn')
            }
        })
        return () => listen()
    }, [])
    function SignOut(e) {
        e.preventDefault()
        signOut(auth)
            .then(() => navigate('/signIn'))
            .catch(error => console.log(error))
    }
  return (
    <button className='signOut' onClick={SignOut} >Sign Out</button>
  )
}

export default UserAuth