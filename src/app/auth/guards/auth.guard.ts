import { CanActivateFn, CanMatchFn, Router, } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export const canMatch: CanMatchFn = (route, state): boolean | Observable<boolean> => {

  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
          router.navigate(["./auth/login"])
        }
      })
    )
};

export const canActivate: CanActivateFn = (route, state): boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
          router.navigate(["./auth/login"])
        }
      })
    )
};


