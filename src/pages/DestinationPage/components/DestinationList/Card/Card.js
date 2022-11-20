import styles from './Card.module.scss';
import clsx from 'clsx';

function Card(props) {
  return <div className={styles.Card}>
    <img src={props.img} alt="" />
    <p className={clsx(styles.time)}>3 TOURS</p>
    <p className={clsx(styles.title)}>Wild Life</p>
    <h3 className={clsx(styles.location)}>{props.location}</h3>
  </div>;
}

export default Card;