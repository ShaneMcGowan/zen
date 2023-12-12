import { IndexRoute } from './routes/index.js';
import { LoginRoute } from './routes/login.js';
import { RegisterRoute } from './routes/register.js';
import { UserRoute } from './routes/user.js';
import { SearchRoute } from './routes/search.js';
import { SearchResultRoute } from './routes/search/search-result.js'
import { HomeRoute } from './routes/home.js';

export const ROUTES = {
  '#': {
    route: IndexRoute,
    children: {
      '': {
        route: HomeRoute
      },
      'login': {
        route: LoginRoute,
      },
      'register': {
        route: RegisterRoute
      },
      'user': {
        route: UserRoute
      },
      'search': {
        route: SearchRoute,
        children: {
          ':data': {
            route: SearchResultRoute
          }
        }
      }
    }
  }
};