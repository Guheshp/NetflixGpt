import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const { title, movies } = props;
    const allMovies = movies?.videos
    console.log(allMovies)

    return (
        <div className='p-2  '>
            <h1 className='text-3xl text-white py-2'>{title}</h1>
            <div className='flex'>
                <div className='flex overflow-x-scroll'>
                    {allMovies && allMovies.map(movies =>
                        <MovieCard key={movies.id} posterPath={movies.thumbnail} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList
