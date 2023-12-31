export class IndexRoute {

  /*
  onEnterBeforeModel(){}

  onEnterModel(){}

  onEnterAfterModel(){}
  */

  template(model){
    let template = document.createElement(`${IndexRoute.name}Template`);
    template.innerHTML = `
      <outlet id="outlet-${IndexRoute.name}"></outlet>
    `;
    return template;
  }

  actions(template){}

  /*
  onExitBeforeModel(){}

  onExitModel(){}

  onExitAfterModel(){}
  */
}