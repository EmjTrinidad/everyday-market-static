import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule, 
    CategoryMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent
  ],
  exports: [ProductsPageComponent]
})
export class MarketModule { }
