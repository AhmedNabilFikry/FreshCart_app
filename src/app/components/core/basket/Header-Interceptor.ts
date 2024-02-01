import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable()

export class HeaderInterceptor implements HttpInterceptor  {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = this.addAuthorizationHeader(req);
    return next.handle(authReq);
  }

  private addAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('userToken');
      if (token) {
        return request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      }
    }
    return request;
  }

}
