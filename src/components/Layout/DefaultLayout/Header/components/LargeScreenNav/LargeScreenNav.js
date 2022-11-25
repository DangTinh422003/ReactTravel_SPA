import styles from './LargeScreenNav.module.scss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';

function LargeScreenNav() {
  return (
    <ul className={clsx(styles.Nav)}>
      {/* home */}
      <li className='d-none d-sm-flex'>
        <div className={styles.Home}>
          <NavLink to="/">Home</NavLink>
        </div>
      </li>

      {/* tours page */}
      <li className='d-none d-sm-flex'>
        <div className={styles.ToursPage}>
          <NavLink to="/toursPage">Tours Page</NavLink>
        </div>
      </li>

      {/* destination */}
      <li className='d-none d-md-flex'>
        <div className={styles.Destination}>
          <NavLink to="/destination">Destination</NavLink>
        </div>
      </li>

      {/* contact */}
      <li className='d-none d-sm-flex'>
        <div className={styles.Contact}>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </li>
    </ul>
  );
}

export default LargeScreenNav;