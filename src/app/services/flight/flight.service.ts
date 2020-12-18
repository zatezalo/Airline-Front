import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/model/flight.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  })
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private readonly baseUrl = 'http://localhost:8080/api/flight/';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseUrl + 'getAllFlights', httpOptions);
  }

}
