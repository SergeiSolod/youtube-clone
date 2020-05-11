import React from 'react'

import {Grid} from '@material-ui/core'
import VideoItem from "../VideoItem/VideoItem";

const VideoList = (props) => {
    return (
        <div>
            {props.videos.map((video) => <VideoItem video={video}/> )}
        </div>
    )
}

export default VideoList