/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';
import clsx from 'clsx';
import logoHeader from '~/image/logoHeader.png';
import Nav from './components/Nav/Nav';
import RightHeader from './components/RightHeader/RightHeader';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={clsx(styles.Header)} id="Header">
      <div className="d-flex justify-content-between justify-content-sm-around container-fluid">
        {/* left header */}
        <div className={clsx('d-flex', 'leftHeader')}>
          <div className={clsx(styles.headerLogo)}>
            <Link to={'/'}>
              <img src={logoHeader} alt="" />
            </Link>
          </div>
          <Nav />
        </div>
        {/* right header */}
        <RightHeader />
      </div>
    </div >
  );
}

export default Header;
