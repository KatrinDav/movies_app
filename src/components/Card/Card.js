import React from 'react';
import Button from '../Button/Button';
import styles from './Card.module.scss';
import reject from '../../images/x.png';
import accept from '../../images/checkmark.png';


const Card = ({ title, summary, rating, img, rejectFn, acceptFn, id, isAccepted }) => {

    return (
        <div className={isAccepted ? [styles.card_wrapper, styles.isAccepted].join(' ') : styles.card_wrapper}>
            <h3 className={styles.title}>{title} ({rating}/10)</h3>
            <div className={styles.image}>
                <img src={img} alt="foto" />
            </div>
            <p className={styles.description}>{summary}</p>
            <div className={styles.buttons}>
                <Button onClickFn={() => acceptFn(id)} icon={accept} isAccepted={true}>Accept</Button>
                <Button onClickFn={() => rejectFn(id)} icon={reject}>Reject</Button>
            </div>
        </div>
    );
}

export default Card;