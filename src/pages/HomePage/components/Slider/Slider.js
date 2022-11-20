import styles from './Slider.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import slider from '~/image/slider.png';
import underlineSlider from '~/image/underlineSlider.png';
import ScrollOut from '~/components/GlobalStyles/scroll-out';

function Slider() {
  // effect when scorlling
  useEffect(() => {
    ScrollOut({
      targets: `
      .${styles.underlineSlider},
      .${styles.sliderDesc},

      .${styles.underlineSliderMobile},
      .${styles.sliderCationMobile},
      .${styles.sliderDescMobile}`,
    });
  });

  return (
    <div className={styles.slider}>
      <Parallax bgImage={slider} strength={350}>
        <div className={clsx(styles.wrapSliderDesc)}>
          <p className={clsx(styles.sliderCationMobile, 'd-none', 'd-md-block')}>Travel And Advantures</p>
          <img src={underlineSlider} alt="" className={clsx(styles.underlineSliderMobile, 'd-none', 'd-md-block')} />
          <p className={clsx(styles.sliderDesc, 'd-none', 'd-md-block')}>Where Would You Want To Go?</p>

          {/* mobile */}
          <p className={clsx(styles.sliderCationMobile, 'd-block', 'd-md-none')}>Traveling</p>
          <img src={underlineSlider} alt="" className={clsx(styles.underlineSliderMobile, 'd-block', 'd-md-none')} />
          <p className={clsx(styles.sliderDescMobile, 'd-block', 'd-md-none')}>Your Jouney Begin Here!</p>
        </div>
      </Parallax>
    </div>
  );
}

export default Slider;
