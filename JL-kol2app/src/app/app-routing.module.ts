import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopJLComponent} from './components/shop-jl/shop-jl.component';
import {ShopDetailsJLComponent} from './components/shop-details-jl/shop-details-jl.component';

const routes: Routes = [
  {
    path: '',
    component: ShopJLComponent
  },
  {
    path: 'item/:id',
    component: ShopDetailsJLComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
