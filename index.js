import { ROUTES } from './routes.js';
import { Router } from '/core/router.js';

(function() {
  // ensure hash routing
  if(!window.location.hash.startsWith('#/')) {
    window.location = '#/';
  }

  Router.navigateToUrl();
})();

