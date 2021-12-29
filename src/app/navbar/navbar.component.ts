import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showDropdown = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  signIn() {
    this.authService.login();
  }




}
