import DestinationList from './conponents/DestinationList/DestinationList';
import MobileLogin from './conponents/MobileLogin/MobileLogin';
import Slider from './conponents/Slider/Slider';
import styles from './ToursPage.module.scss';

function ToursPage() {
  return (
    <div className={styles.ToursPage}>
      <Slider />
      <DestinationList />
      <MobileLogin />
    </div>
  );
}

export default ToursPage;
