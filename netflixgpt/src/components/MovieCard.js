import React from 'react'

const MovieCard = (props) => {
    const { posterPath } = props
    return (
        <img className='w-1/6 pr-2 ' src={posterPath} alt="" />
    )
}

export default MovieCard
