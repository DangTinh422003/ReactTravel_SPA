import styles from './MobileMenu.module.scss';
import clsx from 'clsx';
import SubmobileMenu from './SubmobileMenu/SubmobileMenu';

function MobileMenu() {
  return (
    <div className={clsx(styles.mobileMenu, 'd-block', 'd-sm-none')}>
      <i className="fa-solid fa-bars"></i>
      <SubmobileMenu />
    </div>
  );
}

export default MobileMenu;
