import search from "../../images/search.png";
import styles from "../../css/header.module.css";
import { addVideos, VideoStore } from "../../modules/videoStore";
import React, { useEffect, useRef, useState } from "react";
import Video from "../../models/video";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("아이유");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        setKeyword(inputRef.current?.value ?? "");
    };

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(addVideos([
            {
                snippet: { title: keyword }
            }
        ]as Video[]));

        console.log(VideoStore.getState());
        // fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyARBB27Sqsb2zPGp1GHjoriQz90nPs7Dn8&maxResults=25&q=${keyword}&part=snippet`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         // redux로 스토어 
        //     });
    }, [keyword]);

    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="검색어를 입력해주세요..." ref={inputRef}/>
            <button><img src={search} alt="" onClick={handleButtonClick}/></button>
        </div>
    );
};

export default SearchBar;