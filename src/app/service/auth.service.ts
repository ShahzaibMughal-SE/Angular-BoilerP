import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import {environment } from '../../environments/environment'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  Login(body:any) {
    console.log(body);
    return  this.httpClient.post(environment.apiURL+'/users/signin',body)
}
      
 setSession(authResult:any) {
  debugger;
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}          

logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {
    var expiration = localStorage.getItem("expires_at");
    //var expiresAt = JSON.parse(expiration);
    return moment(expiration);
}    

GetToken(){
  return  localStorage.getItem('id_token');
}
}