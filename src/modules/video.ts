import Video from "../models/video";

interface VideoState {
    videos : Video[]
}

interface VideoStoreActions {
    type: "VIDEO/ADD_VIDEOS" | "VIDEO/CLEAR_VIDEOS",
    videos: Video[]
}

export const ADD_VIDEOS = "VIDEO/ADD_VIDEOS";
export const CLEAR_VIDEOS = "VIDEO/CLEAR_VIDEOS";

export const addVideos = (videos: Video[]) => ({ type: ADD_VIDEOS, videos });
export const clearVideos = (videos: Video[]) => ({ type: CLEAR_VIDEOS, videos });

const initVideos: VideoState = { videos : []};

const videoReducer = (state = initVideos, { videos, type }: VideoStoreActions) => {
    switch(type) {
        case ADD_VIDEOS:  
            return { videos: [...state.videos, ...videos] }

        case CLEAR_VIDEOS:  
            return { videos: [...videos] }
        
        default: return state;
    }
}

export default videoReducer;
