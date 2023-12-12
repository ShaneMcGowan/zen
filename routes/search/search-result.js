import { Route } from '/core/route.js';

export class SearchResultRoute extends Route {

  onEnterModel(urlFragment){
    return {
      syncValue: 'sync test',
      asyncValue: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('async test');
        }, 1000);
      }),
      // a sample API request beers: fetch('https://api.sampleapis.com/beers/ale').then(response => response.json())
    }
  }

  template(model){
    let template = document.createElement(`${SearchResultRoute.name}Template`);
    template.innerHTML = `
      <h1>Search Result</h1>
      <p>This is the search result route for ${this.rootUrl}</p>
    `;
    return template;
  }
  
}