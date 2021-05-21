import search from "../../images/search.png";
import styles from "./header.module.css";

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="검색어를 입력해주세요..."/>
            <button><img src={search} alt="" /></button>
        </div>
    );
};

export default SearchBar;