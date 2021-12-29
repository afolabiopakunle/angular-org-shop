import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showDropdown = false;
  user: firebase.User | null | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState().subscribe(user => {
      this.user = user;
      console.log(this.user);

    })
  }

  logout() {
    this.authService.logout();
  }



}
