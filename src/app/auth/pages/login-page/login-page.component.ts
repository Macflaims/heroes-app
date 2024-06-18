import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  onLogin(): void {
    this.authService.login("martinsanches2533@gmail.com", "contraseña")
      .subscribe(user => {

        this.router.navigate(["/"])

      })
  }

}
