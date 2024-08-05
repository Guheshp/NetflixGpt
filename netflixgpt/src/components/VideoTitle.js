import React from 'react'

const VideoTitle = (props) => {
    const { title } = props

    return (
        <div className='pt-[24%] px-[4%] w-screen aspect-video absolute bg-gradient-to-r from-black'>
            <h1 className='text-white text-4xl font-medium'>{title}</h1>
            <p className='text-white py-6 w-1/3'>The Avengers: Endgame Super Bowl trailer starts with a quick, haunting reminder of all the heroes who've been lost; the likes of Wasp, Nick Fury, the Guardians of the Galaxy, Black Panther, and Spider-Man.</p>

            <div>
                <button className=' text-black text-2xl px-7  py-2 bg-slate-100 rounded-md mx-4 hover:bg-opacity-80'>▶️  Play</button>
                <button className='text-white  text-2xl px-6  py-2 bg-gray-200 rounded-md bg-opacity-30 hover:bg-opacity-20'>More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle
