export class SearchResultRoute {

  onEnterModel(urlFragment){
    return {
      syncValue: 'sync test',
      asyncValue: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('async test');
        }, 1000);
      })
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