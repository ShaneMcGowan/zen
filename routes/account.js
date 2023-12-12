import { Route } from '/core/route.js';

export class AccountRoute extends Route {

  template(){
    let template = document.createElement(`${AccountRoute.name}Template`);
    template.innerHTML = `
      <nav class="bg-white p-3 border-b">
        <div class="flex max-w-4xl ml-auto mr-auto space-x-4">
          <a class=" mr-auto px-3 py-2 text-sm font-medium" href="#/">Zenstagram</a>
          <a class="bg-sky-500 text-white text-gray-300 rounded-md px-3 py-2 text-sm font-medium" href="#/account/login">Log in</a>
          <a class="text-sky-500 px-3 py-2 text-sm font-medium" href="#/account/register">Sign up</a>
        </div>
      </nav>
      <outlet id="outlet-${AccountRoute.name}"></outlet>
    `;
    return template;
  }

}