import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/customhook/useNowPlayingMovies'
import MainComponent from './MainComponent'
import SecondaryComponent from './SecondaryComponent'

const Browse = () => {

    useNowPlayingMovies()


    return (
        <div>
            <Header />
            <MainComponent />
            <SecondaryComponent />
        </div>
    )
}

export default Browse
