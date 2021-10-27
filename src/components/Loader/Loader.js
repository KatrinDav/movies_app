import React from 'react';
import styles from './Loader.module.scss';


const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.lds_dual_ring}></div>
        </div>
    );
}

export default Loader;