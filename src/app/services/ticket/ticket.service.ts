import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
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

  editTicket(credentials) {
    console.log(credentials);
    return this.http.put(this.baseUrl + 'editTicket', {
      ticketId: credentials.ticketId,
      companyId: credentials.companyId,
      flightId: credentials.flightId,
      depart: credentials.depart,
      comeBack: credentials.comeBack,
      oneWay: credentials.oneWay,
      availableCount: credentials.availableCount
    }, httpOptions)
  }

  addBookings(credentials) {
    console.log(credentials);
    return this.http.post(this.baseUrl + 'addBooking', {
      ticketId: credentials.ticketId,
      username: credentials.username,
      numberOfTickets: credentials.numberOfTickets
    }, httpOptions)
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'getAllTickets', httpOptions);
  }

  getTicketsByParams(): Observable<Ticket[]> {
    //return return this.http.get<Ticket[]>(this.baseUrl + 'getTicketsParams', httpOptions);
    return null;
  }

  deleteTicket(id) {
    let url = `http://localhost:8080/api/ticket/${id}`;
    //console.log(url)
    return this.http.delete(`http://localhost:8080/api/ticket/${id}` , httpOptions)
    .subscribe((returnObject: string) => {
      //console.log(returnObject)
      location.reload();
    }, (error: HttpErrorResponse) => {
      //console.log(error);
      location.reload();
    });
  }

  getTicket(id):Observable<Ticket> {
    return this.http.get<Ticket>(`http://localhost:8080/api/ticket/getTicket/${id}` , httpOptions);
  }
}
