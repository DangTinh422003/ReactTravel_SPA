import styles from './SubmobileMenu.module.scss';
import clsx from 'clsx';

function SubmobileMenu() {
  return (
    <ul className={clsx(styles.SubmobileMenu)}>
      <li>Home</li>
      <li>Tours Page</li>
      <li>Destination</li>
      <li>News</li>
    </ul>
  );
}

export default SubmobileMenu;
