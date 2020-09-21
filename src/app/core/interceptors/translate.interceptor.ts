import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {

  constructor(private translate: TranslateService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add Accept-Language header with the current language if available
    const lang = this.translate.currentLang;
    if (lang) {
      req = req.clone({
        setHeaders: { 'Accept-Language': lang }
      });
    }

    return next.handle(req);
  }

}
