import produce from "immer";
import {Api} from "../../api/Api";

export const SET_VIDEOS = "YouTubeCloe/YouTube-reducer/SET_VIDEOS";
export const SET_SELECTED_VIDEO = "YouTubeCloe/YouTube-reducer/SET_SELECTED_VIDEO";
export const SET_LOADING = "YouTubeCloe/YouTube-reducer/SET_LOADING";

let initialState = {
    videos: [],
    selectedVideo: null,
    loading: false
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
        case SET_LOADING: {
            return produce(state, draft => {
                draft.loading = action.loading;
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

const setLoading = loading => ({
    type: SET_LOADING,
    loading
});

export const setYouTubeThunk = search => async (dispatch, getState) => {
    dispatch(setLoading(true))
    let data = await Api.getYouTube(search);
    dispatch(setVideos(data))
    dispatch(setSelectedVideo(data[4]))
    dispatch(setLoading(false))
};

export default YouTubeReducer