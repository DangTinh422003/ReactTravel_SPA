import clsx from 'clsx';
import styles from './DestinationList.module.scss';
import Card from './Card/Card'
const cards = [
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-15.jpg',
    cardTitle: 'Southwest USA National Parks',
    cardPlace: 'Central Park West NY, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-14.jpg',
    cardTitle: 'Yucatán Peninsula & Caribbean',
    cardPlace: 'Bryce Canyon Central Park, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-13.jpg',
    cardTitle: 'Greece, Italy, Switzerland and Paris',
    cardPlace: 'Bryce Canyon Central Park, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-11.jpg',
    cardTitle: 'Southwest USA National Parks',
    cardPlace: 'Bryce Canyon Central Park, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-10.jpg',
    cardTitle: 'Southwest National Parks Canyon',
    cardPlace: 'Bryce Canyon Central Park, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-12.jpg',
    cardTitle: 'Sri Lanka One Life Adventures',
    cardPlace: 'Central Park West NY, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-1.jpg',
    cardTitle: 'Brooklyn Christmas Lights Tour',
    cardPlace: 'Central Park West NY, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-7.jpg',
    cardTitle: 'North Island Adventure Tour',
    cardPlace: 'Central Park West NY, USA',
  },
  {
    cardSrc: 'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-9.jpg',
    cardTitle: 'Small Group Sicily Food & Wine',
    cardPlace: 'Central Park West NY, USA',
  }
]


function DestinationList() {
  return <div className={clsx(styles.DestinationList)} id="DestinationList">
    <div className="container">
      <Card cards={cards} />
    </div>
  </div>;
}

export default DestinationList;
