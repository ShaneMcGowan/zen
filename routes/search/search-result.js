export class SearchResultRoute {

  onEnterModel(urlFragment){
    return {
      query: `${urlFragment}`
    }
  }

  template(model){
    let template = document.createElement(`${SearchResultRoute.name}Template`);
    template.innerHTML = `
      <h1>Search Result</h1>
      <p>This is the search result route for ${model.query}</p>
    `;
    return template;
  }
  
}