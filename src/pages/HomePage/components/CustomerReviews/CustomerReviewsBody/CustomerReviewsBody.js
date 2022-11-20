import styles from './CustomerReviewsBody.module.scss';
import clsx from 'clsx';
import $ from 'jquery';

function CustomerReviewsBody() {
  // removeVal
  function removeVal() {
    $('#Yourname').val('');
    $('#Cellphone').val('');
    $('#Email').val('');
    $('#Message').val('');
  }

  return (
    <div className={clsx(styles.CustomerReviewsBody)}>
      <h3 className={clsx(styles.CustomerReviewsBodyDesc)}>CUSTOMER REVIEWS</h3>
      <form action="">
        {/* formGroup */}
        <div className={clsx(styles.formGroup, 'Yourname')}>
          <label htmlFor="Yourname">
            <i className="fa-regular fa-user"></i>
          </label>
          <input type="text" placeholder="Yourname" id="Yourname" />
        </div>
        {/* formGroup */}
        <div className={clsx(styles.formGroup, 'Cellphone')}>
          <label htmlFor="Cellphone">
            <i className="fa-brands fa-facebook-f"></i>
          </label>
          <input type="text" placeholder="Cellphone" id="Cellphone" />
        </div>
        {/* formGroup */}
        <div className={clsx(styles.formGroup, 'Email')}>
          <label htmlFor="Email">
            <i className="fa-regular fa-envelope"></i>
          </label>
          <input type="text" placeholder="Email" id="Email" />
        </div>
        {/* formGroup */}
        <div className={clsx(styles.formGroup, 'Message')}>
          <label htmlFor="Message">
            <i className="fas fa-comment-dots"></i>
          </label>
          <input type="textarea" placeholder="Message" id="Message" />
        </div>
        {/* submit btn */}
        <div className={clsx(styles.formGroup, styles.submit)}>
          <button type="button" onClick={removeVal}>
            Send Reviews
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerReviewsBody;
