import clsx from 'clsx';
import styles from './Contact.module.scss';
import logo from '~/image/logoFooter.png';

function Company() {
  return (
    <div className={clsx(styles.Contact)}>
      {/* header */}
      <img src={logo} alt="Logo" />
      {/* desc */}
      <div className={clsx(styles.desc)}>
        <p>Welcome to our Trip and Tour Agency</p>
      </div>
      {/* phone num */}
      <div className={clsx(styles.phoneNum)}>
        <i className="fas fa-phone-square-alt"></i>
        <p>01523690712</p>
      </div>
      {/* email */}
      <div className={clsx(styles.email)}>
        <i className="fas fa-mail-bulk"></i>
        <p>tonducthang@gmail.com</p>
      </div>
      {/* address */}
      <div className={clsx(styles.address)}>
        <i className="fas fa-place-of-worship"></i>
        <p>Nguyễn Hữu Thọ Quận 7 TP Hồ Chí Minh</p>
      </div>
    </div>
  );
}

export default Company;
