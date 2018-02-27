import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { LoginRoutingModule } from './login-routing.module';
import { ErrorComponent } from './error/error.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),//{ extraFontName: string, extraFontUrl: string }
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [
    DialogService
  ],//{ provide: NZ_LOCALE, useValue: enUS }
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
