import styles from './Slider.module.scss'
import clsx from 'clsx';

function Slider() {
  return (
    <div className={clsx(styles.Slider)}>
      {/* slider img */}
      <div className={clsx(styles.Slider__img)}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      {/* slider body */}
      <div className={clsx(styles.Slider__body)}>
        <div className={styles.Slider__desc}>Destination</div>
      </div>
    </div>
  );
}

export default Slider;

