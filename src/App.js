import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core'
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import {connect} from "react-redux";
import {setYouTubeThunk} from "./redux/reducers/YouTube-reducer";

function App (props) {
    useEffect(() => {
        props.setYouTubeThunk('minecraft')
    }, []);

    if (props.loading) {
        return <div>Loading...</div>
    }

    return (
        <Grid justify='center' container spacing={16}>
            <Grid item sx={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail selectedVideo={props.selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

let mapStateToProps = state => {
    return {
        videos: state.video.videos,
        selectedVideo: state.video.selectedVideo,
        loading: state.video.loading
    };
};

export default connect(mapStateToProps, {setYouTubeThunk})(App);
