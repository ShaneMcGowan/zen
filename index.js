import { ROUTES } from './routes.js';
import { Router } from '/core/router.js';

(function() {
  // ensure hash routing
  if(!window.location.hash.startsWith('#/')) {
    window.location = '#/';
  }

  // TODO: shouldn't polute global namespace like this but it will do for now
  window.zen = {
    router: new Router(ROUTES) 
  }

  window.zen.router.navigateToUrl();
})();

