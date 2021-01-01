import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private readonly baseUrl = 'http://localhost:8080/api/booking/';

  constructor(private http: HttpClient) { }

  addBooking(id) {
    console.log(`http://localhost:8080/api/reserveBooking/${id}`);
    return this.http.put(`http://localhost:8080/api/reserveBooking/${id}`
    , httpOptions).subscribe((returnObject: string) => {
      console.log(returnObject)
      //location.reload();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      //location.reload();
    });
  }

  deleteBooking(id) {
    //console.log(`http://localhost:8080/api/booking/${id}`);
    return this.http.delete(`http://localhost:8080/api/booking/${id}`, httpOptions)
      .subscribe((returnObject: string) => {
        console.log(returnObject)
        //location.reload();
      }, (error: HttpErrorResponse) => {
        console.log(error);
        //location.reload();
      });
  }
}
