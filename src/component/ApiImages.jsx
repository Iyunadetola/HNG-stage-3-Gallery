import React, { useState, useEffect } from 'react'
import NewImage from './NewImage'
import { TailSpin } from 'react-loader-spinner'
import Loader from './Loader'


const ApiImages = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [fullImg, setFullImg] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.pexels.com/v1/search?query=food', {
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


        <div>
            {isLoading && <TailSpin />}
            {fullImg && (
                <NewImage fullImg={fullImg} setFullImg={setFullImg} />
            )}
        </div>)
}

export default ApiImages