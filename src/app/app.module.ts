import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { SettingModule } from './setting/setting.module';
//toast
import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

//http
import { HttpService }   from './shared/http/http.service';

//storage
import { LocalStorageService } from './shared/storage/local-storage.service';
import { SessionStorageService } from './shared/storage/session-storage.service';

//spin
import { SpinComponent} from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';

//strategy
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ToastBoxComponent,
    ToastComponent,
    SpinComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgZorroAntdModule.forRoot(),//{ extraFontName: string, extraFontUrl: string }
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    SelectivePreloadingStrategy,
    ToastService,
    HttpService,
    SessionStorageService,
    SpinService,
    ToastService,
    //{ provide: NZ_LOCALE, useValue: enUS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
