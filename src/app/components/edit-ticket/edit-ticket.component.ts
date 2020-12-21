import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { Flight } from 'src/app/model/flight.model';
import { Ticket } from 'src/app/model/ticket.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { FlightService } from 'src/app/services/flight/flight.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  ticket:Ticket;
  public editTicketForm: FormGroup;

  flights: Flight[] = [];
  selectedF: number = 0;
  companies: Company[] = [];
  selectedC: number = 0;

  depart: string;
  comeBack: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private ticketService: TicketService,
    private flightService: FlightService, private companyService: CompanyService) { 
    this.editTicketForm = this.formBuilder.group({
      flightId: ['', Validators.required],
      companyId: ['', Validators.required],
      depart: ['', Validators.required],
      comeBack: ['', Validators.required],
      availableCount: [0, Validators.required],
      oneWay: [false]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {

      const id = Number(params.get('id'))
      console.log(id)

      this.ticketService.getTicket(id).subscribe(ticket => {
        this.ticket = ticket;
        this.depart = ticket.depart.toString().split('T')[0];
        this.comeBack = ticket.comeBack.toString().split('T')[0];
        console.log(this.ticket)
      })
    })

    this.flightService.getFlights().subscribe(flights => {
      this.flights = flights;
    })

    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }

  public submitForm(credentials) {
    
    if(credentials.companyId == 0)
      credentials.companyId = this.ticket.company.id;
    if(credentials.flightId == 0)
      credentials.flightId = this.ticket.flight.id;
    if(credentials.depart.toString() == "")
      credentials.depart = this.ticket.depart
    if(credentials.comeBack.toString() == "")
      credentials.comeBack = this.ticket.comeBack;
    credentials.ticketId = this.ticket.id;
    console.log(credentials);
    this.ticketService.editTicket(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
      //location.reload();
    })
    this.router.navigate(['/home']);
  }

}
