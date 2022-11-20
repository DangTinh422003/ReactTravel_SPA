import styles from './Company.module.scss';
import clsx from 'clsx';

function Company() {
  return (
    <div className={clsx(styles.Company)}>
      <h3 className={clsx(styles.Heading)}>Company</h3>
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

export default Company;
