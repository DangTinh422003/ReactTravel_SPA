import styles from './FormEmail.module.scss'
import { Link } from 'react-router-dom'

// icon
import { FaUserAstronaut } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { BsFillTelephonePlusFill } from 'react-icons/bs'

function FormEmail() {
  return (
    <div className={styles.FormEmail}>
      <h3 className={styles.Heading}>Email Form</h3>

      {/* form */}
      <form action="">
        <div className="row">
          {/* left form */}
          <div className="col-lg-6">
            <div className={styles.leftForm}>
              <div className="col-12">
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <div className={styles.inputGroup}>
                    <label htmlFor='name'><FaUserAstronaut /></label>
                    <input type="text" id='name' placeholder='Fullname' />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.inputGroup}>
                    <label htmlFor='email'><MdMarkEmailRead /></label>
                    <input type="text" id='email' placeholder='Email' />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={styles.formGroup}>
                  <label htmlFor="phonenum">Phone Number</label>
                  <div className={styles.inputGroup}>
                    <label htmlFor='phonenum'><BsFillTelephonePlusFill /></label>
                    <input type="text" id='phonenum' placeholder='SDT' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right form */}
          <div className="col-lg-6">
            <div className={styles.rightForm}>
              <div className="col-12">
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="9" placeholder='Message' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submit btn */}
        <Link to={'/'}>Send Message</Link>
      </form>
    </div >
  );
}

export default FormEmail;