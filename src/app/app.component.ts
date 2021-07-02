import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularApp';
  loggedIn = false;
  constructor(
    private router: Router,public authService: AuthService) { }

  ngOnInit(){
    // console.log(this.authService.isLoggedIn$);
    this.loggedIn = localStorage.getItem('token') !== null;
    console.log(this.loggedIn);
  }

  logIn(){
    // this.authService.login();
    this.router.navigate(['/']);
  }

  logOut(){
    this.authService.logout();
    //localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
