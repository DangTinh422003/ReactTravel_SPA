// Import layout
import HomePage from '~/pages/HomePage/HomePage';
import ToursPage from '~/pages/ToursPage/ToursPage';
import DestinationPage from '~/pages/DestinationPage/DestinationPage';
import ContactPage from '~/pages/ContactPage/ContactPage';
import ContactLayout from '~/components/Layout/ContactLayout/ContactLayout';
// public Routers
const publicRoutes = [
  // Home
  { path: '/*', component: HomePage },

  // Tour
  { path: '/tourspage/*', component: ToursPage },

  // Destination
  { path: '/destination/*', component: DestinationPage },

  // Contact
  { path: '/contact*', component: ContactPage, layout: ContactLayout },
];

// private routes
const privateRoutes = [];

// export
export { publicRoutes, privateRoutes };

