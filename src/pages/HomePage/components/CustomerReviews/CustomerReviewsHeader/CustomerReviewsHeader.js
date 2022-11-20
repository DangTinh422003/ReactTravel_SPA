import styles from './CustomerReviews.module.scss';
import clsx from 'clsx';

function CustomerReviewsHeader() {
  return (
    <div className={clsx(styles.CustomerReviews__header)}>
      <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100041672193815">
        <div className={clsx(styles.icon)}>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
      </a>
      <a rel="noreferrer" target="_blank" href="https://www.google.com/">
        <div className={clsx(styles.icon)}>
          <i className="fa-brands fa-google"></i>
        </div>
      </a>
      <a rel="noreferrer" target="_blank" href="https://twitter.com/?lang=en">
        <div className={clsx(styles.icon)}>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </a>
      <a rel="noreferrer" target="_blank" href="https://www.youtube.com/c/TDTUChannel">
        <div className={clsx(styles.icon)}>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </a>
    </div>
  );
}

export default CustomerReviewsHeader;
