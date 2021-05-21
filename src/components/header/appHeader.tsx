import Logo from "../../images/logo.png";
import SearchBar from "./searchBar";
import styles from "../../css/header.module.css";
import { memo } from "react";

const AppHeader = memo(() => {
    return (
        <header className={styles.wrapHeader}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1><img src={Logo} title="로고" alt="로고"/></h1>
                    <h2>YOUTUBE</h2>
                </div>
                <SearchBar></SearchBar>
            </div>
        </header>
    );
});

export default AppHeader;