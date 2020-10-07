import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ListProductComponent } from '../list-product/list-product.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, ListProductComponent, MenuComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
