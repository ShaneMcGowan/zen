# Zen - An absolutely scuffed JavaScript framework for the common man
This is a learning exercise for myself and

## Zenstagram
An instagram clone, the premier sample application for the Zen framework


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