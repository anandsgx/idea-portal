import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = '';

  constructor() { }

  getAuthToken(): string {
    return 'your_auth_token_here';
  }

  setAuthToken(token: string) {
     this.token = token;
  }
}
