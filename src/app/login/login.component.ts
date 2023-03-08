import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ICredentials } from '../models/user.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;
  errorMsg: string = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get name() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {}

  validateUser() {
    const { username, password } = this.loginForm.controls;
    if(this.loginForm.invalid) {
      return;
    }
    this.http
      .post<ICredentials>(`${environment.apiUrl}/authenticate`, { username: username.value, password : password.value}).subscribe(user=>{
        console.log(user)
        this.router.navigate(['/posts']);
        localStorage.setItem('user', JSON.stringify(user));
        this.loginService.setLoggedIn();
      }, error => {
        this.error = true;
        this.errorMsg = error.error.message;
      })
  }
}
