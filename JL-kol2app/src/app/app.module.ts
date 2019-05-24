import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JlDataService } from './services/jl-data.service';
import { ShopJLComponent } from './components/shop-jl/shop-jl.component';
import { ShopItemJLComponent } from './components/shop-item-jl/shop-item-jl.component';
import { ShopDetailsJLComponent } from './components/shop-details-jl/shop-details-jl.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopJLComponent,
    ShopItemJLComponent,
    ShopDetailsJLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JlDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
