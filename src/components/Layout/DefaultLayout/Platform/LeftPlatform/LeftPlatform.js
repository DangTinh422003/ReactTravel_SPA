import clsx from 'clsx';
import styles from './LeftPlatform.module.scss';

function LeftPlatform() {
  return (
    <div className="col-12 col-lg-6">
      <div className={clsx(styles.LeftPlatform)}>
        {/* play btn */}
        <a href="https://www.youtube.com/watch?v=iTJJC2Hlmu0">
          <button className={clsx(styles.playBtn)}>
            <i className="fas fa-play"></i>
          </button>
        </a>
        {/* heading */}
        <div className={clsx(styles.Heading)}>
          <h3>Are you ready to travel?</h3>
        </div>
        {/* desc */}
        <div className={clsx(styles.Desc)}>
          <p>Tevily is a World Leading Online Tour Booking Platform</p>
        </div>
      </div>
    </div>
  );
}

export default LeftPlatform;
