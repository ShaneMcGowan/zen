export class LoginRoute {

  template(){
    let template = document.createElement(`${LoginRoute.name}Template`);
    template.innerHTML = `
      <label>Username</label>
      <input type="text" placeholder="username" />
      <label>Password</label>
      <input type="password" placeholder="password" />
      <button>Login</button>
    `;
    return template;
  }

}