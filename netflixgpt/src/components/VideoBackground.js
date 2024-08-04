import React from 'react'

const VideoBackground = (props) => {
    const { trailer } = props;
    return (
        <iframe className='w-screen aspect-video' src="https://www.youtube.com/embed/r5X-hFf6Bwo?si=1ScwBuGMNce8IuYW ?&autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}

export default VideoBackground
