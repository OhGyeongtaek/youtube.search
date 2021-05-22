import Layout from '../layout/layout';
import VedioList from "../components/list/videoList";
import { VideoStore } from '../modules/videoStore';

const MovieList = () => {
    return (
        <Layout>
            <VedioList></VedioList>
        </Layout>
    );
};

MovieList.propTypes = {
    
};
export default MovieList;