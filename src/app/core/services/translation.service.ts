import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public readonly translate: TranslateService) { }

  /**
   * get language from local storage
   */
  private static get selectedLang(): string {
    return localStorage.getItem('language');
  }

  /**
   * store language to localstorage
   */
  private static set selectedLang(value: string) {
    if (!value) {
      localStorage.removeItem('language');
    } else {
      localStorage.setItem('language', value);
    }
  }

  /**
   * loadd i18n
   * @param http : HttpClient
   */
  static createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/');
  }

  /**
   * Initializes translation languages, fallback language, and detect the browser-language.
   * @param defaultLang The fallback language.
   * @param languages The supported languages.
   */
  setup(defaultLang: string, languages: string[]): void {
    this.translate.addLangs(languages);
    this.translate.setDefaultLang(defaultLang);
    this.switchLang(this.detectLang());
  }

  /**
   * Gets the last selected language or detect it from the browser.
   */
  detectLang(): string {
    return TranslationService.selectedLang || this.translate.getBrowserLang();
  }

  switchLang(value: string): string {
    this.translate.use(value = this.correctLang(value));
    TranslationService.selectedLang = value;

    return value;
  }

  correctLang(value: string): string {
    return (!value || this.translate.langs.indexOf(value = value.toLowerCase()) < 0) ?
      this.translate.defaultLang : value;
  }
}
