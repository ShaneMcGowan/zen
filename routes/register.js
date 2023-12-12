export class RegisterRoute {

  template(){
    let template = document.createElement(`${RegisterRoute.name}Template`);
    template.innerHTML = `
      <label>Username</label>
      <input type="text" placeholder="username" />
      <label>Password</label>
      <input type="password" placeholder="password" />
      <button>Register</button>
    `;
    return template;
  }
  
}