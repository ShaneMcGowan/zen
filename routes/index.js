export class IndexRoute {

  onEnterBeforeModel(){}

  onEnterModel(){}

  onEnterAfterModel(){}

  template(){
    let template = document.createElement(`${IndexRoute.name}Template`);
    template.innerHTML = `
      <navbar class="navbar">
        <a href="#/">Zenstagram</a>
        <a href="#/register">Register</a>
        <a href="#/login">Login</a>
      </navbar>
      <outlet id="outlet-${IndexRoute.name}"></outlet>
    `;
    return template;
  }

  actions(template){}

  onExitBeforeModel(){}

  onExitModel(){}

  onExitAfterModel(){}
}