import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  redirectUrl = '';
  login(name, pwd) {
    return of({ name, pwd }).pipe(map(o => o.name === 'duanlian' && o.pwd === '111111'), delay(500), tap(b => this.isLogin = b));
  }
  logout() {
    this.isLogin = false;
  }
  constructor() { }
}
