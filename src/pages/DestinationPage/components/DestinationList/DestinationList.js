import clsx from 'clsx';
import styles from './DestinationList.module.scss'
import Card from './Card/Card';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './image/image'

function DestinationList() {
  return (
    <div className={clsx(styles.DestinationList)} id="listLocation">
      <div className="container">
        {/* header */}
        <div className={clsx(styles.Header)}>
          <h3 className={clsx(styles.Heading)}>Destination lists</h3>
          <p className={clsx(styles.Desc)}>Go Exotic Places</p>
        </div>
        {/* body */}
        <div className={styles.Body}>
          <div className='row no-gutters'>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img1} location='Hungary' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-6', styles.card__item)}><Card img={img2} location='Thailand' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img3} location='France' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-6', styles.card__item)}><Card img={img4} location='United Kingdom' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-6', styles.card__item)}><Card img={img5} location='Italy' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img6} location='Japan' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img7} location='Morocco' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img8} location='Singapore' /></div>
            <div className={clsx('col-12 col-md-6 col-lg-3', styles.card__item)}><Card img={img9} location='VietNam' /></div>
          </div>
        </div>

      </div >
    </div >
  );
}

export default DestinationList;