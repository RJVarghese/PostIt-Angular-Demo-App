import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  alreadyLoggedIn: boolean = false;
  constructor(private loginService: LoginService) { 
    this.alreadyLoggedIn = !!localStorage.getItem('user');
    console.log('waslogged', this.alreadyLoggedIn)
  }

  ngOnInit() {
    this.loginService.isLoggedIn$.subscribe(loggedIn=>{
      this.isLoggedIn = loggedIn;
      console.log('nowlogged', this.isLoggedIn)
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

}