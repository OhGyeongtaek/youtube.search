import React from 'react';
import styles from "../css/layout.module.css";
import AppHeader from "../components/header/appHeader";

const Layout: React.FC<Props> = (props) => {
    return (
        <div>
            <AppHeader></AppHeader>
            <div className={styles.layout}>
                {props.children}
            </div>
        </div>
    );
};

interface Props {
    props?: 
        | React.ReactChild
        | React.ReactChild[];
}

export default Layout;