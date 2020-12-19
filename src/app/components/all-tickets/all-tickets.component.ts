import { Component, OnInit } from '@angular/core';
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

  tickets: Ticket[] = [];
  public user: User;
  constructor(private ticketService: TicketService, private userService: UserService) { }

  ngOnInit(): void {

    this.ticketService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    })

    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      //console.log(user);
      this.user = user;
    })
  }

}
