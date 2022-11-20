/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import styles from './Footer.module.scss';
import Contact from './Contact/Contact';
import Explore from './Explore/Explore';
import Newsletter from './Newsletter/Newsletter';
import Company from './Company/Company';

function Footer() {
  return (
    <div className={clsx(styles.Footer)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Contact />
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <Company />
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <Explore />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Newsletter />
          </div>
        </div>
        {/* scroll goto top */}
        <div className={styles.wrapgoToTopBtn}>
          <a href="#" className={styles.goToTopBtn}>
            <i className="fas fa-arrow-alt-circle-up"></i>
          </a>
          <p>Go To Top</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
