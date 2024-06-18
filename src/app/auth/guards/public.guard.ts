import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const publicGuard: CanActivateFn = (route, state): boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
          console.log("Redireccionando a /");
          router.navigate(["./"])
        }
      }),
      map(isAuthenticated => !isAuthenticated)
    )
};
