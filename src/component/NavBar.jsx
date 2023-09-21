import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserAuth from './UserAuth'

const NavBar = () => {
    const [inputChange, setInputChange] = useState('')
    const navigate = useNavigate()
    function onSubmit(e){
        e.preventDefault()
        if (inputChange){
            navigate(`/search/${inputChange}`)
        }
    }
  return (
    <div className='navDiv' >
        <Link className='home' to='/'>Home</Link> 
        <form action="" onSubmit={onSubmit} >
            <input type="text" onChange={(e)=>setInputChange(e.target.value)} />
            <button type="submit">search</button>
        </form>
        <UserAuth/>
    </div>
  )
}

export default NavBar