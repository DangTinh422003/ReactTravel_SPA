import clsx from "clsx";
import styles from './Card.module.scss';
import { FaMapMarkerAlt, FaStar, FaRegStar, FaCameraRetro } from 'react-icons/fa'

function Card({ cards }) {

  return (
    <div className="row">
      {
        cards.map((card, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className={clsx(styles.card, "card")} >
                {/* card-img */}
                <div className={clsx(styles.cardImgWrap)}>
                  <img className={clsx(styles.cardImgTop, 'card-img-top')} src={card.cardSrc} alt="Card cap" />
                </div>
                <div className={clsx(styles.cardBody, 'card-body')}>
                  {/* card-body__head */}
                  <div className={clsx(styles.cardBodyHead, 'card-body__head')}>
                    <div className={clsx(styles.rating)}>
                      <span>3.87 BY 3 REVIEWS</span>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                    </div>
                    <div className={clsx(styles.camera)}><FaCameraRetro /></div>
                  </div>
                  {/* card-body__content */}
                  <div className={clsx(styles.cardBodyContent, 'card-body__content')}>
                    <h3 className={styles.heading}>{card.cardTitle}</h3>
                    <p className={styles.place}>
                      <i><FaMapMarkerAlt /></i>
                      {card.cardPlace}
                    </p>
                    <p className={styles.cost}>From <span>$39.00</span></p>
                  </div>
                </div>

              </div>
            </div>
          )
        })
      }
    </div >
  );
}

export default Card;