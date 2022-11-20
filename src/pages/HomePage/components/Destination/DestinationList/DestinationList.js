import clsx from 'clsx';
import styles from './DestinationList.module.scss';

function DestinationList({ arrInformation }) {

  //  function change color 
  function changeColor(event) {
    event.target.classList.toggle(styles.active);
  }

  return (
    <div className={styles.DestinationList}>
      <div className="row">
        {/* item */}
        {arrInformation.map((information, index) => {
          return (
            <div className={clsx(styles.DestinationItem, 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-12')} key={index}>
              <div className={clsx(styles.card, 'card')}>
                <input className="card-img-top" type="image" src={information.url} alt="" />
                <div className={clsx(styles.cardBody, 'card-body')}>
                  <div className="card-body__header">
                    <p className={styles.Featured}>FEATURED</p>
                    <i className={clsx(styles.HeartIcon, 'far', 'fa-heart')} onClick={changeColor}></i>
                  </div>
                  <h3 className={clsx(styles.card_title)}>{information.title}</h3>
                  <p className={clsx(styles.card_desc)}>{information.desc}</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
        {/*  */}
      </div>
    </div>
  );
}

export default DestinationList;
