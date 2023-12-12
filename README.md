# Zen - An absolutely scuffed JavaScript framework for the common man
This is a learning exercise for myself and


```TypeScript
export class Route {

  // validates if can navigate to route
  onEnterBeforeModel(){}

  // used to perform requests for data
  onEnterModel(){}

  // validates if can navigate to route, with model data
  onEnterAfterModel(){}

  // renders the template
  template(model: any): HtmlElement {}

  // should be used to attach actions to template elements
  actions(template: HtmlElement): void 

  // validates if can navigate away from route
  onExitBeforeModel(){}

  // used to perform requests for data
  onExitModel(){}

  // validates if can navigate away from route, with model data
  onExitAfterModel(){}
}
```

## Define your routes
```TypeScript
export const ROUTES = {
  '#': {
    route: IndexRoute,
    children: {
      '': {
        route: HomeRoute
      },
      'search': {
        route: SearchRoute
      },
      'account': {
        route: AccountRoute,
        children: {
          'login': {
            route: AccountLoginRoute,
          },
          'register': {
            route: AccountRegisterRoute
          },
        }
      }
    }
  }
}
```

The above defines the following routes
- `/#/`
- `/#/search`
- `/#/account`
- `/#/account/login`
- `/#/account/register`

## Loading data in onEnterModel
```TypeScript
onEnterModel(urlFragment){
  return {
    syncValue: 'sync value',
    asyncValue: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('async value');
      }, 1000);
    })
  }
}
```

### Zenstagram
An instagram clone, the premier sample application for the Zen framework
