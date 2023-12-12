export class HomeRoute {

  template(){
    let template = document.createElement(`${HomeRoute.name}Template`);
    template.innerHTML = `
      <h1>Welcome to Zenstagram</h1>
      <a href="#/account/login">Login</a>
      <a href="#/account/register">Register</a>
    `;
    return template;
  }

}