import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },
  {
    path: 'register',
    loadChildren: () =>
      import(
        './pages/register/register.module'
      ).then(m => m.RegisterModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        m => m.HomeModule
      )
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
