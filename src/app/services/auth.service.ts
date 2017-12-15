import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: HttpClient) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: string, password: string) {
    return this.http.post(environment.apiAuth, { username: user, password: password })
      .map(response => {
        let token = response['token'];
        if(token){
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: user, token: token }));
          return true;
        }
        return false;
      })
  }

  logout(): void{
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
