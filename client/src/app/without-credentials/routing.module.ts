import { RouterModule, Routes } from "@angular/router";

const INIT_ROUTES: Routes = [
  {
    path: 'session',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'session/login',
    pathMatch: 'full'
  }

];

export const initRouter = RouterModule.forChild(INIT_ROUTES);
