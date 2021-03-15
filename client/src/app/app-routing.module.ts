import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from './security.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./with-credentials/with-credentials.module').then(m => m.WithCredentialsModule),
    canActivate: [SecurityGuard]
  },
  {
    path: '',
    loadChildren: () => import('./without-credentials/without-credentials.module').then(m => m.WithoutCredentialsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
