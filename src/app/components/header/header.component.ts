import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    this.authService.logOut().then(() => {
      this.router.navigate(['/login'])
      
    })
  }

}
