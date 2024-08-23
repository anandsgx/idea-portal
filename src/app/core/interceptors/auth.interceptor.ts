// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { retry, catchError, throwError, Observable, finalize } from 'rxjs';
// import { AuthService } from '../services/auth.service';
// import { LoaderService } from '../services/loader.service';

import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService, private loaderService: LoaderService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('open');
//     this.loaderService.show();
//     const authToken = this.authService.getAuthToken();
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${authToken}`)
//     });
//     return next.handle(authReq).pipe(
    
      
//       finalize(() =>   {console.log('closed');this.loaderService.hide()}),
//       catchError((error: HttpErrorResponse) => {
//         console.error('Error occurred:', error);
//         return throwError(error);
//       })
//     );
//   }
// }

// import { HttpInterceptorFn } from '@angular/common/http';

// export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const authToken = localStorage.getItem('authToken');
  // const token= inject(FirebaseAuthService)
  const authToken= "Your auth token";
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};