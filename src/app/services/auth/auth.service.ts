import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from 'src/app/model/credentials.model';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.logout()
  }

  login(credentials) {
    return this.http.post(this.baseUrl + 'login', {
      username: credentials.username,
      password: credentials.password
    }).pipe(map((responseData: Credentials) => {
      localStorage.setItem("username", credentials.username);
      localStorage.setItem("jwt", responseData.jwt);
    }))
  }

  register(credentials) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      })
    }
    return this.http.post(this.baseUrl + 'register', {
      username: credentials.username,
      password: credentials.password,
      userType: credentials.userType
    }, httpOptions)
  }

  logout() {
    localStorage.removeItem("jwt")
  }
}
