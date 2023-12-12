export class UserRoute {

  template(){
    let template = document.createElement(`${UserRoute.name}Template`);
    template.innerHTML = `
      <h1>User</h1>
      <p>This is the user route.</p>
    `;
    return template;
  }
  
}