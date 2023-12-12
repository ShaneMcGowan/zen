export class AccountLoginRoute {

  template(){
    let template = document.createElement(`${AccountLoginRoute.name}Template`);
    template.innerHTML = `
      <div class="flex flex-col">
        <h1>Zenstagram</h1>
        <input class="border-2 p-2" type="text" placeholder="username" />
        <input class="border-2 p-2" type="password" placeholder="password" />
        <button class="bg-sky-500 text-white">Login</button>
      </div>
    `;
    return template;
  }

}