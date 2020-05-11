import produce from "immer";
import {Api} from "../../api/Api";

export const SET_VIDEOS = "YouTubeCloe/YouTube-reducer/SET_VIDEOS";
export const SET_SELECTED_VIDEO = "YouTubeCloe/YouTube-reducer/SET_SELECTED_VIDEO";

let initialState = {
    videos: [],
    selectedVideo: null
};

const YouTubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS: {
            return produce(state, draft => {
                draft.videos = action.videos;
            });
        }
        case SET_SELECTED_VIDEO: {
            return produce(state, draft => {
                draft.selectedVideo = action.selectedVideo;
            });
        }
        default:
            return state;
    }
}

const setVideos = videos => ({
    type: SET_VIDEOS,
    videos
});

const setSelectedVideo = selectedVideo => ({
    type: SET_SELECTED_VIDEO,
    selectedVideo
});


export const setYouTubeThunk = search => async (dispatch, getState) => {
    let data = await Api.getYouTube(search);
    let videos = [];
    for (let i = 0; i < 5; i++) {
       if (data[i].id.videoId !== undefined) {
           videos.push(data[i]);
       }
    }



    dispatch(setVideos(videos))
    dispatch(setSelectedVideo(data[4]))
};

export default YouTubeReducer