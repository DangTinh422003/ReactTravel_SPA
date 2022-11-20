import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';
import clsx from 'clsx';
function Nav() {
  return (
    <ul className={clsx(styles.Nav, 'd-none', 'd-sm-flex')}>
      {/* home */}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* tours page */}
      <li className={clsx('d-none', 'd-lg-flex')}>
        <NavLink to="/toursPage">Tours Page</NavLink>
      </li>
      {/* destination */}
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      {/* contact */}
      <li className={clsx('d-none', 'd-md-flex')}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
