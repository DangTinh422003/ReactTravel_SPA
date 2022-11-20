import clsx from 'clsx';
import styles from './CustomerRevews.module.scss';
import CustomerReviewsHeader from './CustomerReviewsHeader/CustomerReviewsHeader';
import CustomerReviewsBody from './CustomerReviewsBody/CustomerReviewsBody';
import background from '~/image/discount.jpg';
import ScrollOut from '~/components/GlobalStyles/scroll-out';
import { useEffect } from 'react';

function CustomerReviews() {
  useEffect(() => {
    ScrollOut({
      targets: `.${styles.leftForm},.${styles.rightForm}`,
    });
  });

  return (
    <div className={clsx(styles.CustomerReviews)} id="CustomerReviews">
      <div className={clsx('container-fluid', 'container-lg', styles.container)}>
        {/* left */}
        <div className={clsx(styles.leftForm, 'd-none', 'd-md-block')}>
          <img src={background} alt="" />
        </div>
        {/* right */}
        <div className={clsx(styles.rightForm)}>
          <CustomerReviewsHeader />
          <CustomerReviewsBody />
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default CustomerReviews;
