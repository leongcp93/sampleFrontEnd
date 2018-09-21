import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { SubscribesectionComponent } from './subscribesection/subscribesection.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { MainMensComponent } from './main-mens/main-mens.component';
import { MainWomensComponent } from './main-womens/main-womens.component';
import { MainBagsComponent } from './main-bags/main-bags.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainOutdoorComponent } from './main-outdoor/main-outdoor.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { MainCartComponent } from './main-cart/main-cart.component';
import { BlackheaderComponent } from './blackheader/blackheader.component';
import { ProductSampleComponent } from './product-sample/product-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderpageComponent,
    MainsectionComponent,
    SubscribesectionComponent,
    FootersectionComponent,
    MainMensComponent,
    MainWomensComponent,
    MainBagsComponent,
    MainHomeComponent,
    MainOutdoorComponent,
    MainSearchComponent,
    MainCartComponent,
    BlackheaderComponent,
    ProductSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
