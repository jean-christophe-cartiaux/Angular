import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class connexionService {

  isAuthenticated: boolean=false;
  login(username: string, password: string):boolean{
    this.isAuthenticated = username==='admin' && password==='admin';
    return this.isAuthenticated;
  }
}
