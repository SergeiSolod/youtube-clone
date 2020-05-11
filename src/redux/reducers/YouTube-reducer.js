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
    dispatch(setVideos(data))
    dispatch(setSelectedVideo(data[0]))
};

export default YouTubeReducer