import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuCollapsedComponent } from './menu-collapsed/menu-collapsed.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule.forRoot(),//{ extraFontName: string, extraFontUrl: string }
  ],
  declarations: [
    MainComponent,
    MenuCollapsedComponent,
  ]
})
export class MainModule { }
