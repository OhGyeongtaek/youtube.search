import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import VedioList from "../components/list/videoList";

const MovieList = () => {
    const [videos, setVideos]  = useState([]);
    const [keyword, setKeyword] = useState();
    const test = () => {
        alert(1);
    }
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyARBB27Sqsb2zPGp1GHjoriQz90nPs7Dn8&maxResults=25&q=${keyword}&part=snippet`)
            .then((res) => res.json())
            .then((res) => setVideos(res.items));
    }, [keyword]);

    return (
        <Layout>
            <VedioList videos={videos}></VedioList>
        </Layout>
    );
};

MovieList.propTypes = {
    
};
export default MovieList;