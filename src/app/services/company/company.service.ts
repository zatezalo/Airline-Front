import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/model/company.model';
import { CompanyWithTickets } from 'src/app/model/companyWithTickets.model';

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

  getCompany(id): Observable<CompanyWithTickets> {
    return this.http.get<CompanyWithTickets>(this.baseUrl + 'getCompany/' + id, httpOptions)
  }

  deleteCompany(id) {
    let url = `http://localhost:8080/api/company/${id}`;
    //console.log(url)
    return this.http.delete(`http://localhost:8080/api/company/${id}`, httpOptions)
      .subscribe((returnObject: string) => {
        console.log(returnObject)
        //location.reload();
      }, (error: HttpErrorResponse) => {
        console.log(error);
        //location.reload();
      });
  }

  addCompany(credentials) {
    console.log(credentials);
    return this.http.post(this.baseUrl + 'addCompany', {
      name: credentials.name
    }, httpOptions)
  }

  editCompany(credentials, id) {
    console.log(credentials, id);
    return this.http.put(this.baseUrl + 'editCompany', {
      id: id,
      name: credentials.name
    }, httpOptions)
  }

}
