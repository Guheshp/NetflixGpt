import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"

const SecondaryComponent = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    return (
        <div className=' bg-black'>
            <div className='-mt-44 pl-12 relative z-10'>
                <MovieList title={"Now Playing"} movies={movies} />
                <MovieList title={"Trending"} movies={movies} />
                <MovieList title={"Popular"} movies={movies} />
                <MovieList title={"Up Coming"} movies={movies} />
                <MovieList title={"Horror"} movies={movies} />
            </div>

        </div>
    )
}

export default SecondaryComponent
