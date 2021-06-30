import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  checkLogin(parms:any){
    let url ='http://127.0.0.1:8000/api/login';
    return this.http.post(url,parms);
  }
  
}
