import Vedio from "../../models/video";
import VedioItem from '../items/vedioItem';

const VideoList = (props: Props) => {
    return (
        <ul>
            { props.videos.map((video) => <VedioItem vedio={video}/>) }
        </ul>
    );
}

interface Props {
    videos: Vedio[]
}

export default VideoList;