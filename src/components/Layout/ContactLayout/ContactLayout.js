import Header from '../DefaultLayout/Header/Header'

function ContactLayout({ children }) {
  return <>
    <Header />
    {children}
  </>;
}

export default ContactLayout;