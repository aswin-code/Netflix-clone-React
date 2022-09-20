import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { imageUrl, trending } from '../../constants/constants'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {

        axios.get(trending).then(e => {

            setMovie(e.data.results[Math.floor(Math.random() * 20)])
        })

    }, [])
    return (
        <div className='banner' style={{ backgroundImage: `url(${imageUrl + movie?.backdrop_path})` }}>
            <div className="content">
                <h1 className="title">{movie?.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie?.overview}</h1>
            </div>
            <div className="fade-bottom">

            </div>
        </div>
    )
}

export default Banner