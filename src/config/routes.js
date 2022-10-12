import ROUTES from '../constants/routes.js';
import Homepage from '../pages/Homepage/index.js';

export default [
    {
      path: ROUTES.PAGE_HOMEPAGE,
      exact: true,
      page: Homepage,
    }
  ];