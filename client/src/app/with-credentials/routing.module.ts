import { RouterModule, Routes } from '@angular/router';

const ENTRY_ROUTES: Routes = [
  {
    path: 'home',
    children: [
      {
        path: 'cars',
        loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];

export const homeRouter = RouterModule.forChild(ENTRY_ROUTES);
