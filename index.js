import { ROUTES } from './routes.js';
import { Router } from '/core/router.js';

(function() {
  // ensure hash routing
  alert(window.location.hash); 
  if(!window.location.hash.startsWith('#/')) {
    window.location = '#/';
  }

  Router.navigateToUrl();
})();

