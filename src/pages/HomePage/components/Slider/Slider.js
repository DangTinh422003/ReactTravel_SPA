import styles from './Slider.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import slider from '~/image/slider.png';
import ScrollOut from '~/components/GlobalStyles/scroll-out';

function Slider() {
  // effect when scorlling
  useEffect(() => {
    ScrollOut({
      targets: `
      .${styles.sliderDesc},
      .${styles.sliderCationMobile},
      .${styles.sliderDescMobile}`,
    });
  });

  return (
    <div className={styles.slider}>
      <Parallax bgImage={slider} strength={350}>
        <div className={clsx(styles.wrapSliderDesc)}>
          {/* large screen */}
          <p className={clsx(styles.sliderCationMobile, 'd-none', 'd-md-block')}>Travel And Advantures</p>
          <p className={clsx(styles.sliderDesc, 'd-none', 'd-md-block')}>Where Would You Want To Go?</p>
          {/* mobile */}
          <p className={clsx(styles.sliderCationMobile, 'd-block', 'd-md-none')}>Traveling</p>
          <p className={clsx(styles.sliderDescMobile, 'd-block', 'd-md-none')}>Your Jouney Begin Here!</p>
        </div>
      </Parallax>
    </div>
  );
}

export default Slider;
