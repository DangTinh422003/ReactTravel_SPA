import clsx from 'clsx';
import styles from './Slider.module.scss';
import slider from '../../image/slider.jpg';

function Slider() {
  return (
    <div className={clsx(styles.Slider)}>
      <img src={slider} alt="" className={clsx(styles.ImgBg)} />
      <div className="container-fluid">
        <h4 className={clsx(styles.SliderHeading)}>Explore The Worlds</h4>
        <p className={clsx(styles.SliderDesc, 'd-none d-sm-block')}>People Don't Take, Trips Take People</p>
      </div>
    </div>
  );
}

export default Slider;
