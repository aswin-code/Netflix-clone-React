import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const { title, isSmall, url, istrailer } = props
    const [movie, setMovies] = useState([])
    const [video, setVideo] = useState(false)
    const [id, setId] = useState('')
    useEffect(() => {
        console.log("hello")
        axios.get(url).then(e => {
            if (e.data.results.length !== 0) {
                setMovies(e.data.results)
            }
        })
    }, [])
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then(e => {
            if (e.data.results.length !== 0) {
                console.log(e.data.results[0].key)
                setId(e.data.results[0].key)
                setVideo(!video)
            }
        })
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="posters">
                {movie.map(obj => <img onClick={() => { handleMovie(obj.id) }} className={isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj?.backdrop_path}`} loading='lazy' key={obj.id} />)}
            </div>
            {istrailer && video ? <Youtube opts={opts} videoId={id} /> : null}
        </div>
    )
}

export default RowPost