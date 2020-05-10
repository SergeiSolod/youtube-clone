import produce from "immer";
import {Api} from "../../api/Api";

export const SET_YOUTUBE = "YouTubeCloe/YouTube-reducer/SET_YOUTUBE";

let initialState = {
    youtube: {}
};

const YouTubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_YOUTUBE: {
            return produce(state, draft => {
                draft.youtube = action.youtube;
            });
        }
        default:
            return state;
    }
}

const setYouTube = youtube => ({
    type: SET_YOUTUBE,
    youtube
});

export const setYouTubeThunk = search => async (dispatch, getState) => {
    let data = await Api.getYouTube(search);
    console.log(data)
};

export default YouTubeReducer