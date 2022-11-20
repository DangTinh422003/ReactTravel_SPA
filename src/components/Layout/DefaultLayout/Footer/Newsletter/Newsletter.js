import clsx from 'clsx';
import styles from './Newsletter.module.scss';

function Newsletter() {
  return (
    <div className={clsx(styles.Newsletter)}>
      <input type="email" placeholder="Email Address" />
      <button type="submit">SUBSCRIBE</button>
      <div className={clsx(styles.desc)}>
        <input type="checkbox" />
        <p>I agree to all terms and policies</p>
      </div>
    </div>
  );
}

export default Newsletter;
