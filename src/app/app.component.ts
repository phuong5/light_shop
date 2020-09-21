import { Component } from '@angular/core';

import { environment } from '@environments/environment';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translation: TranslationService) {
    // localization
    translation.setup(environment.default_lang, environment.languages);
  }
}
