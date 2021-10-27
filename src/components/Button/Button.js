import React from 'react';
import styles from './Button.module.scss';


const Button = ({ children, onClickFn, icon, isAccepted }) => {

    return (
        <button className={isAccepted ? [styles.button, styles.accBtn].join(' ') : styles.button}
            onClick={onClickFn}>
            <div className={isAccepted ? [styles.icon, styles.accIcon].join(' ') : styles.icon}>
                <img src={icon} alt='' />
            </div>
            <div className={isAccepted ? styles.accName : styles.btnName}>
                {children}
            </div>

        </button>
    );
}

export default Button;