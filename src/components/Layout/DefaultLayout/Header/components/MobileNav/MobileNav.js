import styles from './MobileNav.module.scss'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg'

function MobileNav() {
  return (
    <div className={clsx(styles.mobileMenu, 'd-md-none')}>
      <CgMenuRight />
      <div className={styles.subMenu}>
        <div className="row">
          <div className="col-12 d-sm-none">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="col-12">
            <NavLink to="/toursPage">Tours Page</NavLink>
          </div>
          <div className="col-12">
            <NavLink to="/destination">Destination</NavLink>
          </div>
          <div className="col-12 d-sm-none">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;