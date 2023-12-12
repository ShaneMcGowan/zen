
export class Router {

  constructor(routes) {
    this.ROUTES = routes;
  }

  navigate = (rootUrl, urlFragment) => {
    let _root = rootUrl ? `${rootUrl}` : '';
    let _fragment = urlFragment ? `/${urlFragment}` : '';

    window.location.hash = `/${_root}${_fragment}`;;
    
    this.traverseRoutesFromUrl();
  }

  getRouteArray = () => {
    return window.location.hash.split('/');
  }

  // TODO: should this be recursive rather than a loop?
  // TODO: potentially only rerender sub tree
  traverseRoutesFromUrl = async () => {
    let routes = this.getRouteArray();
    console.log(`routes: ${routes}`);

    let parent = undefined;
    let routeFragments 
    
    // TODO: should this be recursive rather than a loop?
    for (let index = 0; index < routes.length; index++) {
    
      // get fragment
      const urlFragment = routes[index];

      console.log(`PARENT: ${parent}`);
      console.log(`URL FRAGMENT: ${urlFragment}`);

      
      
      // match fragment to route
      let route;
      if(parent === undefined){
        route = this.ROUTES[urlFragment];
      } else {
        // check for dynamic route which will always start with ':'
        // note: this means a route can only be dynamic and does not match static children
        // TODO: disallow dynamic route in root of this.ROUTES (did I mention routes?)
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
        await this.runRouteLifeCycle(route, document.body);
      } else {
        await this.runRouteLifeCycle(route, document.getElementById(`outlet-${parent.route.name}`));
      }

      // set parent for next iteration
      parent = route;
    }

    // add navigation listeners after render
    document.body.querySelectorAll('a').forEach((a) => {
      console.log('called'); // TODO: this function is firing 3 times on navigation, look into that
      a.addEventListener('click', this.navigateToRoute);
    });
  }

  // render template into outlet
  runRouteLifeCycle = async (route, outlet) => {
    
    ///////////////////////////
    // initialize route class
    ///////////////////////////

    // create route class and set rootUrl (used for navigation)
    let routeClass = new route.route(route.urlFragment);

    ///////////////////////////
    // run onEnterBeforeModel
    ///////////////////////////
    if(routeClass.onEnterBeforeModel){
      throw new Error('onEnterBeforeModel not implemented');
    }

    ///////////////////////////
    // run onEnterModel
    ///////////////////////////
    let model = routeClass.onEnterModel ? routeClass.onEnterModel() : undefined;
    if(model){
      // resolve async values
      let resolvedModel = await Promise.all(Object.values(model));
      // TODO: review this as it seems dodgy
      Object.keys(model).forEach((key, index) => {
        model[key] = resolvedModel[index];
      });
    }

    ///////////////////////////
    // run onEnterAfterModel
    ///////////////////////////
    if(routeClass.onEnterAfterModel){
      throw new Error('onEnterAfterModel not implemented');
    }

    ///////////////////////////
    // run template
    ///////////////////////////
    
    // clear outlet
    while (outlet.lastElementChild) {
      outlet.removeChild(outlet.lastElementChild);
    }

    // render template into outlet
    let template = routeClass.template(model);
    outlet.appendChild(template);

    ///////////////////////////
    // run actions
    ///////////////////////////
    if(routeClass.actions){
      routeClass.actions(template);
    }

    ///////////////////////////
    // run onExitBeforeModel
    ///////////////////////////
    if(routeClass.onExitBeforeModel){
      throw new Error('onExitBeforeModel not implemented');
    }

    ///////////////////////////
    // run onExitModel
    ///////////////////////////
    if(routeClass.onExitModel){
      throw new Error('onExitModel not implemented');
    }

    ///////////////////////////
    // run onExitAfterModel
    ///////////////////////////
    if(routeClass.onExitAfterModel){
      throw new Error('onExitAfterModel not implemented');
    }
  }

  navigateToRoute = (e) => {
    e.preventDefault();

    // remove previous listeners
    document.body.querySelectorAll('a').forEach((a) => {
      a.removeEventListener('click', this.navigateToRoute);
    });

    // update url
    window.location.hash = e.target.getAttribute('href');

    // render new routes
    this.traverseRoutesFromUrl();
  }


}
