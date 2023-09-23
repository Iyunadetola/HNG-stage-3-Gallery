import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewImage from './NewImage'
import Loader from './Loader'
import NavBar from './NavBar'

const Search = () => {
    const { title } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [fullImg, setFullImg] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.pexels.com/v1/search?query=${title}`, {
            headers: {
                Authorization: '4gjrSAQI7JqauIHsLLa3GwmdvF08C6HBFtBSkXMsqfK6YHRBpmCmUvnB'
            }
        }).then(response => response.json())
            .then(response => {
                setFullImg(response.photos)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className='search' >
            <NavBar/>
            <h3>{title}</h3>
            {isLoading && <Loader/>}
            {fullImg && (
                <NewImage fullImg={fullImg} setFullImg={setFullImg} />
            )}
        </div>
    )
}

export default Search