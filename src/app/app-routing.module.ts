import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { ProductSampleComponent } from './product-sample/product-sample.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomepageComponent},
  {path:'mens', component:MainMensComponent},
  {path:'womens', component:MainWomensComponent},
  {path:'bags', component:MainBagsComponent},
  {path:'homesection', component:MainHomeComponent},
  {path:'outdoor', component:MainOutdoorComponent},
  {path:'search', component:MainSearchComponent},
  {path:'cart', component:MainCartComponent},
  {path:'productsample', component:ProductSampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  HomepageComponent,
  HeaderpageComponent,
  MainsectionComponent,
  SubscribesectionComponent,
  FootersectionComponent
]
