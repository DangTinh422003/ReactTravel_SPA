import clsx from 'clsx';
import styles from './Explore.module.scss';

function Explore() {
  return (
    <div className={clsx(styles.Explore)}>
      <h3 className={clsx(styles.Heading)}>Explore</h3>
      <ul>
        <li>Account</li>
        <li>Privacy Policy</li>
        <li>Affilitate Program</li>
        <li>Our Partner</li>
        <li>Events</li>
      </ul>
    </div>
  );
}

export default Explore;
