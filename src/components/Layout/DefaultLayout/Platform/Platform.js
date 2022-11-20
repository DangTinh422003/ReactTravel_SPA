import styles from './Platform.module.scss';
import LeftPlatform from './LeftPlatform/LeftPlatform';
import RightPlatform from './RightPlatform/RightPlatform';
import clsx from 'clsx';
import { Parallax } from 'react-parallax';
import PlatFormImg from '~/image/PlatFormBg.jpg';
function Platform() {
  return (
    <div className={clsx(styles.Platform)} id="Platform">
      <Parallax bgImage={PlatFormImg} strength={350}>
        <div className={clsx('container', styles.container)}>
          <div className="row d-sm-block d-md-flex">
            <LeftPlatform />
            <RightPlatform />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Platform;
