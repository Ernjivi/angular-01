import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private model: any = {};
  private loading: boolean = false;
  private error: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(): void{
    this.loading = true;
    this.authService.login(this.model.user, this.model.password)
      .subscribe((result: boolean) => {
        if(result){
          this.router.navigate(['/']);
        } else{
          this.error = 'User/Password error.'
          this.loading = false;
        }
      })

  }

}
