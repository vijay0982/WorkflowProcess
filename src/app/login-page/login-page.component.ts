import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  title = 'Login Page';
  submitted = false;
  
  loginModel:Login={
    username:null,
    password:null
  }
  validateLogin(user:Login): void{
    this.router.navigate(['/LandingPage']);
    
  }

}
