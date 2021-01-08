import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { Ticket } from 'src/app/model/ticket.model';
import { User } from 'src/app/model/user.model';
import { CityService } from 'src/app/services/city/city.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  public searchForm: FormGroup;
  tickets = null;
  public bookingForm: FormGroup;
  public user: User;
  origin: City[] = [];
  selectedO: number = 1;
  destination: City[] = [];
  selectedD: number = 1;

  constructor(private router: Router, private formBuilder: FormBuilder, private cityService: CityService, private userService: UserService, private ticketService: TicketService) {
    this.searchForm = this.formBuilder.group({
      origin: [''],
      destination: [''],
      depart: [''],
      comeBack: [''],
    })
    this.bookingForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      username: ['']
    })
  }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(cities => {
      this.origin = cities;
      this.destination = cities;
    })
    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
    this.ticketService.getAllTickets().subscribe(tickets => {
      // if(this.user.userType === "ADMIN")
      this.tickets = tickets;
      //console.log(this.tickets);
    })
  }

  deleteTicket(id) {
    this.ticketService.deleteTicket(id);
  }

  public submitAddForm(credentials, id) {
    //console.log(credentials, id);
    this.ticketService.addBookings(credentials, id).subscribe(data => {
      console.log(data);
      //location.reload();
    });
    this.router.navigate(['/profile/' + this.userService.getUsername()]);
  }

  public submitForm(credentials) {
    this.ticketService.getTicketsByParams(credentials).subscribe(
      (returnObject) => {
        this.tickets = returnObject;
        console.log(this.tickets);
      }, (error: HttpErrorResponse) => {
        //console.log(error);
      });;
  }

}
