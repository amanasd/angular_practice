import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  getToken(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer ${ localStorage.getItem("token") }'
    })
    return headers;
  }
}
