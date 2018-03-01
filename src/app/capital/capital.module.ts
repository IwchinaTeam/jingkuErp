import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalRoutingModule } from './capital-routing.module';
import { CapitalComponent } from './capital/capital.component';

@NgModule({
  imports: [
    CommonModule,
    CapitalRoutingModule
  ],
  declarations: [CapitalComponent]
})
export class CapitalModule { }
