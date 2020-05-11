import React from 'react'

import {Grid} from '@material-ui/core'

const VideoList = (props) => {
    return (
        <div>
            {props.videos.map((video, i) => <h1 key={i}>пост {i}</h1> )}

        </div>
    )
}

export default VideoList