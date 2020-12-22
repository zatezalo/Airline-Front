import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket.model';
import { User } from 'src/app/model/user.model';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  public bookingForm: FormGroup;

  tickets: Ticket[] = [];
  public user: User;
  constructor(private ticketService: TicketService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.bookingForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      username: [''],
      ticketId: ['']
    })
   }

  ngOnInit(): void {

    this.ticketService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    })

    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      //console.log(user);
      this.user = user;
    })
  }

  deleteTicket(id) {
    console.log(id)
    this.ticketService.deleteTicket(id);
  }

  public submitForm(credentials) {
    console.log(credentials);
    /*this.ticketService.addBookings(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/bookings']);
      //location.reload();
    });*/
  }

}
