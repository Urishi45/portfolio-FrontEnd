import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'  
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  getEmail() {
    return this.loginForm.get("email")
  }

  getPassword() {
    return this.loginForm.get("password")
  }

  onSubmit(form: User) {

    if (this.loginForm.valid) {
      this.authService.login(form)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }

  continue() {
    this.router.navigate(['/portfolio'])
  }
}
