import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/model/company.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly baseUrl = 'http://localhost:8080/api/company/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + 'getAllCompanies', httpOptions);
  }

}
