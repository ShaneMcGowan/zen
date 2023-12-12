export class HomeRoute {

  template(model){
    let template = document.createElement(`${HomeRoute.name}Template`);
    template.innerHTML = `
      <h1>Welcome to Zenstagram</h1>
      <a href="#/account/login">Login</a>
      <a href="#/account/register">Register</a>
      <a href="#/search">Search</a>
    `;
    return template;
  }

}