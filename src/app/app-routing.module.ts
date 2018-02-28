import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  }, {
    path: 'setting',
    loadChildren: 'app/setting/setting.module#SettingModule',
  }, {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule',
  }, {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }, {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
        useHash: true,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }