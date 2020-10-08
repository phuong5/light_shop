import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BackgroundColorDirective } from './directives/background-color.directive';

@NgModule({
  declarations: [BackgroundColorDirective],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    BackgroundColorDirective
  ]
})
export class SharedModule { }
