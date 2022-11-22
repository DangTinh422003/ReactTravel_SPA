import styles from './RightPlatform.module.scss';
import clsx from 'clsx';

function RightPlatform() {
  return (
    <div className="col-12 col-lg-6">
      <div className={clsx(styles.RightPlatform)}>
        <div className={clsx(styles.wrapItem, 'col-12', 'row')}>
          {/* 1 */}
          <div className="col-12 col-sm-6">
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.icon)}>
                <i className="fa-solid fa-hippo"></i>
              </div>
              <div className={clsx(styles.desc)}>
                <p>Wildlife Tours</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-12 col-sm-6">
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.icon)}>
                <i className="fas fa-parachute-box"></i>
              </div>
              <div className={clsx(styles.desc)}>
                <p>Paragliding Tours</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-12 col-sm-6">
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.icon)}>
                <i className="fas fa-motorcycle"></i>
              </div>
              <div className={clsx(styles.desc)}>
                <p>Adventures Tours</p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-12 col-sm-6">
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.icon)}>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className={clsx(styles.desc)}>
                <p>Hang Gliding Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPlatform;
