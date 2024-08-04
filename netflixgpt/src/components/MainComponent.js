import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainComponent = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return;
    const mainMovie = movies[7]
    console.log(mainMovie)
    const { title, plot } = mainMovie
    const { trailer } = mainMovie

    return (
        <div>
            <VideoTitle title={title} plot={plot} />
            <VideoBackground trailer={trailer} />

        </div>
    )
}

export default MainComponent
