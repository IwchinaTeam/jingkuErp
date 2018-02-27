import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  { path: 'login1', component: LoginComponent },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  }, {
    path: 'setting',
    loadChildren: 'app/setting/setting.module#SettingModule',
  },
  {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule',
  },
  {
    path: 'test',
    loadChildren: 'app/test/test.module#TestModule',
  },
  { path: '', redirectTo: '/test', pathMatch: 'full', },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
        // useHash:true,
        // preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }