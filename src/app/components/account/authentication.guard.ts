import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let _Authservice = inject(AuthService);
  let _Router = inject(Router);
    if (_Authservice.userdata.getValue() != null) {
      return true;
    } else{
    return false;
    }
};
