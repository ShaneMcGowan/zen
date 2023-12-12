import { Router } from '/core/router.js';
import { Route } from '/core/route.js';

export class SearchRoute extends Route {
  
  template = () => {
    let template = document.createElement(`${SearchRoute.name}Template`);
    template.innerHTML = `
      <h1>Search</h1>
      <input id="${SELECTORS.input}" type="text" placeholder="search" />
      <button id="${SELECTORS.button}">Search</button>
      <outlet id="${SELECTORS.outlet}"></outlet>
    `;

    return template;
  }

  actions = (template) => {
    template.querySelector(`#${SELECTORS.button}`).addEventListener('click', this.search);
  }

  search = () => {
    let value = document.querySelector(`#${SELECTORS.input}`).value;
    console.log(this);
    console.log(this.rootUrl);
    Router.navigate(this.rootUrl, value);
    alert(`Search for ${this.rootUrl}`);
  }
  
}

const SELECTORS = {
  input: `input-${SearchRoute.name}`,
  button: `btn-${SearchRoute.name}`,
  outlet: `outlet-${SearchRoute.name}`
}