import Header from './Header/Header';
import Footer from './Footer/Footer';
import Platform from './Platform/Platform';

function DefaultLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Platform />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
