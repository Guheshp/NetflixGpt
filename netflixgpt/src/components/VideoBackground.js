import React from 'react'

const VideoBackground = (props) => {
    const { youtube_video_id } = props;

    return (

        <div>
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube-nocookie.com/embed/" + youtube_video_id + "?autoplay=1&mute=1"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"

            ></iframe>


        </div >

    )
}

export default VideoBackground

