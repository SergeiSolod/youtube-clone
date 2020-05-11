import React from 'react'

import {Paper, Typography} from '@material-ui/core'

const VideoDetail = (props) => {
    console.log(props.selectedVideo.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    return (
        <>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography varialt='h4'>{props.selectedVideo.snippet.title} - {props.selectedVideo.snippet.channelTitle}</Typography>
                <Typography varialt='subtitle1'>{props.selectedVideo.snippet.channelTitle}</Typography>
                <Typography varialt='subtitle2'>{props.selectedVideo.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail