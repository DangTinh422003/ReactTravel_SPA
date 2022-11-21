/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';
import clsx from 'clsx';
import logoHeader from '~/image/logoHeader.png';
import Nav from './components/Nav/Nav';

import { Link } from 'react-router-dom';


function Header() {


  return (
    <div className={clsx(styles.Header)} id="Header" >
      <div className="container-sm">
        <div className={clsx('d-flex justify-content-between', 'leftHeader')}>
          {/* logo */}
          <div className={clsx(styles.headerLogo)}>
            <Link to={'/'}>
              <img src={logoHeader} alt="" />
            </Link>
          </div>
          {/* navbar */}
          <Nav />
        </div >
      </div >
    </div >
  );
}

export default Header;
