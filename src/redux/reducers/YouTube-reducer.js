import produce from "immer";
import {Api} from "../../api/Api";

export const SET_VIDEO = "YouTubeCloe/YouTube-reducer/SET_VIDEO";

let initialState = {
    video: [],
    selectedVideo: null
};

const YouTubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEO: {
            return produce(state, draft => {
                draft.video = action.video;
            });
        }
        default:
            return state;
    }
}

const setYouTube = video => ({
    type: SET_VIDEO,
    video
});

export const setYouTubeThunk = search => async (dispatch, getState) => {
    let data = await Api.getYouTube(search);
    console.log(data)
};

export default YouTubeReducer