import { IndexRoute } from './routes/index.js';
import { AccountLoginRoute } from './routes/account/login.js';
import { AccountRegisterRoute } from './routes/account/register.js';
import { UserRoute } from './routes/user.js';
import { SearchRoute } from './routes/search.js';
import { SearchResultRoute } from './routes/search/search-result.js'
import { HomeRoute } from './routes/home.js';
import { AccountRoute } from './routes/account.js';

export const ROUTES = {
  '#': {
    route: IndexRoute,
    children: {
      '': {
        route: HomeRoute
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

/*
'' - home
'accounts/emailsignup/'
'accounts/login/?source=auth_switcher'
accounts/password/reset/
*/