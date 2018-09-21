import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, NavigationExtras, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  canActivate(route, state) {
    return this.check(state.url);
  }
  canActivateChild(route, state) {
    return this.canActivate(route, state);
  }
  canLoad(route) {
    const url = `/${route.path}`;
    return this.check(url);
  }
  check(url) {
    if (this.auth.isLogin) {
      return true;
    }
    this.auth.redirectUrl = url;
    const sessionId = '051101001';
    const navigationExtras: NavigationExtras = {
      queryParams: {
        sessionId
      },
      fragment: 'anchor'
    };
    this.router.navigate(['home'], navigationExtras);
    return false;
  }
  constructor(private auth: AuthService, private router: Router) { }
}
