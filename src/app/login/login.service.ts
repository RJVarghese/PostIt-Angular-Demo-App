import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean>;
  constructor() { 
    this.isLoggedIn$ = this.loggedIn.asObservable();
  }

  setLoggedIn() {
    this.loggedIn.next(true);
  }
}