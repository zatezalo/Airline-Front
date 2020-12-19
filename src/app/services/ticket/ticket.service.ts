import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/model/ticket.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  })
}


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly baseUrl = 'http://localhost:8080/api/ticket/';

  constructor(private http: HttpClient) { }

  addTicket(credentials) {
    console.log(credentials);
    return this.http.post(this.baseUrl + 'addTicket', {
      companyId: credentials.companyId,
      flightId: credentials.flightId,
      depart: credentials.depart,
      comeBack: credentials.comeBack,
      oneWay: credentials.oneWay,
      availableCount: credentials.availableCount
    }, httpOptions)
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'getAllTickets', httpOptions);
  }
}
