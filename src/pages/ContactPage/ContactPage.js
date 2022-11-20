import clsx from 'clsx';
import SocialContact from './components/SocialContact/SocialContact';
import styles from './ContactPage.module.scss';

// router
import { Route, Routes } from 'react-router-dom';

// components
import FormEmail from './components/Form/FormEmail/FormEmail';


function ContactPage() {
  return (
    <div className={clsx(styles.ContactPage)}>
      <div className={clsx('row justify-content-center', styles.wrapContactPage)}>
        <div className={clsx('col-lg-6 col-12', styles.col__6)} >
          <h1 className={styles.Heading}>Get in Touch!</h1>
          <p className={styles.Text}>Contact us for a quote, help ot to join the team.</p>
          {/* social contact */}
          <SocialContact />
          <Routes>
            <Route path="" element={<FormEmail />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default ContactPage;