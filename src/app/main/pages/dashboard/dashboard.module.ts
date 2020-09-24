import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    AngularFontAwesomeModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
