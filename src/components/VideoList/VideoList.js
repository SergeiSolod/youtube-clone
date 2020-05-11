import React from 'react'

import {Grid} from '@material-ui/core'
import VideoItem from "../VideoItem/VideoItem";

const VideoList = (props) => {
    return (
        <Grid container spacing={10}>
            {props.videos.map((video) => <VideoItem video={video}/> )}
        </Grid>
    )
}

export default VideoList