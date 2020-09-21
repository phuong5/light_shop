import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
