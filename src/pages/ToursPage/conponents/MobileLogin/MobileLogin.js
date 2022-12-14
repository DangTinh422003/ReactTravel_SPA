import clsx from 'clsx';
import imgApp from '../../image/image-app.png';
import styles from './MobileLogin.module.scss';

function MobileLogin() {
  return (
    <div className={clsx(styles.MobileLogin, 'd-none d-sm-block')} id="mobileLogin">
      <div className="container">
        <div className="row">
          {/* left */}
          <div className={clsx('col-12 col-lg-6', styles.left)}>
            <p className={clsx(styles.slogan)}>Join to us</p>
            <h3 className={clsx(styles.MobileLoginHeading)}>Not a Member Yet?</h3>
            <p className={clsx(styles.MobileLoginDesc)}>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
            <div className={clsx(styles.controlGroup)}>
              <button className={clsx(styles.signInBtn)}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                SIGN IN
              </button>
              <button className={clsx(styles.deleteBtn)}>
                <i className="fa-regular fa-user"></i>
                REGISTER
              </button>
            </div>
          </div>
          {/* right */}
          <div className={clsx('col-12 col-lg-6', styles.right)}>
            <img src={imgApp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLogin;