import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {

    this.ticketService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    })
  }

}
