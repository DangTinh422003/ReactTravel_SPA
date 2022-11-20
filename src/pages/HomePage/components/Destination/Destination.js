import clsx from 'clsx';
import styles from './Destination.module.scss';
import DestinationList from './DestinationList/DestinationList';

const arrInformation = [
  {
    url: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Adventures',
    desc: 'Halong Bay',
  },
  {
    url: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    title: 'Adventures',
    desc: 'Japan',
  },
  {
    url: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Adventures',
    desc: 'Korea',
  },
  {
    url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Adventures',
    desc: 'China',
  },
  {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    title: 'Adventures',
    desc: 'Paris',
  },
  {
    url: 'https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Adventures',
    desc: 'Malaysia',
  },
  {
    url: 'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Adventures',
    desc: 'Singapore',
  },
  {
    url: 'https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Adventures',
    desc: 'India',
  },
];

function Destination() {
  return (
    <div className={clsx(styles.Destination)} id="FeaturedDestination">
      <div className={clsx('container', styles.container)}>
        {/* Heading */}
        <div className={clsx(styles.DestinationHeading)}>
          <h3>Featured Destination</h3>
        </div>
        {/* Descs */}
        <div className={clsx(styles.DestinationDesc)}>
          <p>Most Popular Tours</p>
        </div>
        {/* List Destination */}
        <DestinationList arrInformation={arrInformation} />
      </div>
    </div>
  );
}

export default Destination;
