import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.get(baseUrl,{headers: headers});
  }

  get(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.get(`${baseUrl}/${id}`,{headers: headers});
  }

  create(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.post(baseUrl, data,{headers: headers});
  }

  update(id:any, data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.put(`${baseUrl}/${id}`, data,{headers: headers});
  }

  delete(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.delete(`${baseUrl}/${id}`,{headers: headers});
  }

  deleteAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.delete(baseUrl,{headers: headers});
  }

  findByTitle(title:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    })
    return this.http.get(`${baseUrl}?title=${title}`,{headers: headers});
  }
}