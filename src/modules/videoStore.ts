import Video from "../models/video";
import { combineReducers, createStore } from "redux";

export const ADD_VIDEOS = "ADD_VIDEOS";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";

const initVideos: VideoState = { videos : []};

const handleVideoReducer = (state = initVideos, { videos, type }: VideoStoreActions) => {
    switch(type) {
        case ADD_VIDEOS:  
            return { videos: [...state.videos, ...videos] }

        case CLEAR_VIDEOS:  
            return { videos: [...videos] }
        
        default: return state;
    }
}

export const rootReducer = combineReducers({
    video: handleVideoReducer
});

export const VideoStore = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const addVideos = (videos: Video[]) => ({ type: ADD_VIDEOS, videos });

export const clearVideos = (videos: Video[]) => {
    VideoStore.dispatch({ type: CLEAR_VIDEOS, videos });
};

interface VideoState {
    videos : Video[]
}

interface VideoStoreActions {
    type: "ADD_VIDEOS" | "CLEAR_VIDEOS",
    videos: Video[]
}

