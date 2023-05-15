import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { User } from '../user';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(private authFire: AngularFireAuth, private router: Router) { }

  async login(user: User) {

    const {email, password} = user

    try {

      return await this.authFire.signInWithEmailAndPassword(email, password).then(result=>{
        this.isLoggedIn = true
        this.router.navigate(['/portfolio'])
        

      });

    } catch (error) {

      console.log("Hubo un error en el login: ", error);

      return null;

    }

  }

  logOut() {
    this.isLoggedIn = false
    return this.authFire.signOut()
  }

  isUserLoggedIn() {
    return this.isLoggedIn
  }
}
