import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainComponent = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    console.log("movies", movies)
    if (!movies) return;
    const mainMovie = movies?.trailer
    // console.log("mainMovie", mainMovie)
    // const mainMovie = movies[7]
    // console.log(mainMovie)
    const { title } = mainMovie;
    const { youtube_video_id } = mainMovie
    // console.log("youtube_video_id", youtube_video_id)

    return (
        <div>
            <VideoTitle title={title} />
            <VideoBackground youtube_video_id={youtube_video_id} />

        </div>
    )
}

export default MainComponent
