import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = (props) => {
    console.log(props)
    return (
      <Grid>
          <Paper style={{display: 'flex', alignItems: 'center'}}>
            <img style={{marginRight: '20px'}} alt='thumbnail' src={props.video.snippet.thumbnails.medium.url}/>
              <Typography variant='subtitle1'><b>{props.video.snippet.title}</b></Typography>
          </Paper>
      </Grid>
    )
}

export default VideoItem