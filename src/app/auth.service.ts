import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor() {
    const isLoggedIn = localStorage.getItem('loginStatus') === 'true';

    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  login() {
    // logic
    localStorage.setItem('loginStatus', 'true');
    this.isLoggedIn$.next(true);
  }

  logout() {
    // logic
    localStorage.removeItem('loginStatus');
    this.isLoggedIn$.next(false);
  }
}
