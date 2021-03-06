import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, 
  children: [
    { path: 'shop', loadChildren: 'app/shop/shop.module#ShopModule' },
    {path:'capital',loadChildren: 'app/capital/capital.module#CapitalModule'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
