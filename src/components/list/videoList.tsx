import { useDispatch, useSelector } from "react-redux";
import Video from "../../models/video";
import VedioItem from '../items/vedioItem';
import { RootState } from '../../modules/videoStore';

const VideoList = ({videos} : VideoListProps) => {
    const a = useSelector((state: RootState) => state.video.videos);

    return (
        <ul>
            { a?.map((video) => <VedioItem vedio={video}/>) }
        </ul>
    );
}

interface VideoListProps {
    videos?: Video[]
}

export default VideoList;