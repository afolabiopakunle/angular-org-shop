import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;

  constructor(public auth: AngularFireAuth) {}

  login() {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

  logout() {
    this.auth.signOut();
  }

}
