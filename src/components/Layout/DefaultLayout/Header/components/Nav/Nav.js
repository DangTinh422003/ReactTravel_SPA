import { NavLink, Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg'


import styles from './Nav.module.scss';
import clsx from 'clsx';

function Nav() {
  return (
    <>
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

        {/* news */}
        <li className='d-none d-lg-flex'>
          <div className={styles.News}>
            <NavLink to="/news">News</NavLink>
          </div>
        </li>

        {/* about */}
        <li className='d-none d-lg-flex'>
          <div className={styles.About}>
            <NavLink to="/about">About</NavLink>
          </div>
        </li>

        {/* contact */}
        <li className='d-none d-sm-flex'>
          <div className={styles.Contact}>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </li>
      </ul>

      {/* mobile menu */}
      <div className={clsx(styles.mobileMenu, 'd-md-none')}>
        <CgMenuRight />
        <div className={styles.subMenu}>
          <div className="row">
            <div className="col-6 d-sm-none"><Link to="/">Home</Link></div>
            <div className="col-6"><Link to="/toursPage">Tours Page</Link></div>
            <div className="col-6"><Link to="/destination">Destination</Link></div>
            <div className="col-6"><Link to="/news">News</Link></div>
            <div className="col-6"><Link to="/about">About</Link></div>
            <div className="col-6 d-sm-none"><Link to="/contact">Contact</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
