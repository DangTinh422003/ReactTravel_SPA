import styles from './SocialContact.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneForwardFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

function SocialContact() {
  return <div className={styles.SocialContact} >
    <div className="row no-gutters">
      <div className={clsx(styles.col, 'col-md-12 col-lg-4')}>
        <a target='_blank' href='https://mail.google.com/' rel="noreferrer">
          <div className={styles.item}>
            {/* icon */}
            <AiTwotoneMail />
            <p className={styles.desc}>Email</p>
          </div>
        </a>
      </div>
      <div className={clsx(styles.col, 'col-md-6 col-lg-4')}>
        <a target='_blank' href='https://www.google.com/maps/place/Ton+Duc+Thang+University/@10.7326689,106.6975809,17z/data=!3m1!4b1!4m5!3m4!1s0x317528b2747a81a3:0x33c1813055acb613!8m2!3d10.7326689!4d106.6997696' rel="noreferrer">
          <div className={styles.item}>
            {/* icon */}
            <MdLocationOn />
            <p className={styles.desc}>Location</p>
          </div>
        </a>
      </div>
      <div className={clsx(styles.col, 'col-md-6 col-lg-4')}>
        <a href='tel:0862040542'>
          <div className={styles.item}>
            {/* icon */}
            <BsTelephoneForwardFill />
            <p className={styles.desc}>Phone Number</p>
          </div>
        </a>
      </div>
    </div>
  </div>;
}

export default SocialContact;