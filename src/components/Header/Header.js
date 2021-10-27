import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Tinder for movies</h1>
            <h2>Check our recommendations of selected films</h2>

        </div>
    );
}

export default Header;