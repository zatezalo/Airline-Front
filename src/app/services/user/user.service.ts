import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // localStorage.getItem('jwt')
  private readonly baseUrl = 'http://localhost:8080/api/user/';
  constructor(private http: HttpClient) { }

  //public getUserByUsername():Observable<User> {}
  public getUserByUsername(username:string):Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getUserByUsername?username=' + username , httpOptions);
  }

  public getUsername():string {
    return localStorage.getItem('username');
  }
}
