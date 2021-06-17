import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(){
    localStorage.setItem('user', 'Kritika')
  }

  checkAuth(){
    return (localStorage.getItem('user')=== 'Kritika');
  }
}
