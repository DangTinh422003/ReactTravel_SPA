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
        <Link to={''}>
          <div className={styles.item}>
            {/* icon */}
            <AiTwotoneMail />
            <p className={styles.desc}>Email</p>
          </div>
        </Link>
      </div>
      <div className={clsx(styles.col, 'col-md-6 col-lg-4')}>
        <Link to={'/Destination'}>
          <div className={styles.item}>
            {/* icon */}
            <MdLocationOn />
            <p className={styles.desc}>Location</p>
          </div>
        </Link>
      </div>
      <div className={clsx(styles.col, 'col-md-6 col-lg-4')}>
        <Link to={'/'}>
          <div className={styles.item}>
            {/* icon */}
            <BsTelephoneForwardFill />
            <p className={styles.desc}>Phone Number</p>
          </div>
        </Link>
      </div>
    </div>
  </div>;
}

export default SocialContact;