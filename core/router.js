import { ROUTES } from '/routes.js';

export class Router {

  // TODO: should this be removed?
  static navigateToUrl(urlFragment){
    // default to empty string
    let _fragment = urlFragment ? `/${urlFragment}` : '';

    window.location.hash += _fragment;
    
    traverseRoutesFromUrl();
  }

  static navigate(rootUrl, urlFragment){
    let url = `${rootUrl}/${urlFragment}`;
    window.location.hash = url;
    
    traverseRoutesFromUrl();
  }
}

function getRouteArray() {
  return window.location.hash.split('/');
}

function traverseRoutesFromUrl(){
  let routes = getRouteArray();
  console.log(`routes: ${routes}`);

  let parent = undefined;
  let routeFragments 
  
  for (let index = 0; index < routes.length; index++) {
  
    // get fragment
    const urlFragment = routes[index];

    console.log(`PARENT: ${parent}`);
    console.log(`URL FRAGMENT: ${urlFragment}`);

    
    
    // match fragment to route
    let route;
    if(parent === undefined){
      route = ROUTES[urlFragment];
    } else {
      // check for dynamic route which will always start with ':'
      // note: this means a route can only be dynamic and does not match static children
      // TODO: disallow dynamic route in root of ROUTES (did I mention routes?)
      let dynamicRouteKey = Object.keys(parent.children).find((child) => child.startsWith(':'));
      if(dynamicRouteKey){
        route = parent.children[dynamicRouteKey];
      } else {
        route = parent.children[urlFragment];
      }

      // make fragment available on route
      route.urlFragment = urlFragment;
      // TODO: make location hash available on route
    }

    if(route === undefined){
      throw new Error(`Route ${urlFragment} not found`);
    }

    // render template
    if(parent === undefined){
      renderTemplate(route, document.body);
    } else {
      renderTemplate(route, document.getElementById(`outlet-${parent.route.name}`));
    }

    // set parent for next iteration
    parent = route;
  }

  // add navigation listeners after render
  document.body.querySelectorAll('a').forEach((a) => {
    console.log('called'); // TODO: this function is firing 3 times on navigation, look into that
    a.addEventListener('click', navigateToRoute);
  });
}

// render template into outlet
function renderTemplate(route, outlet) {
  
  // create route class and set rootUrl (used for navigation)
  let routeClass = new route.route(route.urlFragment);

  // get model if defined
  let model = routeClass.onEnterModel ? routeClass.onEnterModel(route.urlFragment) : undefined;

  // clear outlet
  while (outlet.lastElementChild) {
    outlet.removeChild(outlet.lastElementChild);
  }

  // render template into outlet
  let template = routeClass.template(model);
  outlet.appendChild(template);

  // attach actions if defined
  if(routeClass.actions){
    routeClass.actions(template);
  }
}

function navigateToRoute(e) {
  e.preventDefault();

  // remove previous listeners
  document.body.querySelectorAll('a').forEach((a) => {
    a.removeEventListener('click', navigateToRoute);
  });

  // update url
  window.location.hash = e.target.getAttribute('href');

  // render new routes
  traverseRoutesFromUrl();
}