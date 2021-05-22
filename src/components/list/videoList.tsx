import { useSelector } from "react-redux";
import VedioItem from '../items/vedioItem';
import { RootState } from '../../modules/index';

const VideoList = () => {
    const videos = useSelector((state: RootState) => state.video.videos);

    return (
        <ul>
            { videos?.map((video) => <VedioItem vedio={video}/>) }
        </ul>
    );
}

export default VideoList;