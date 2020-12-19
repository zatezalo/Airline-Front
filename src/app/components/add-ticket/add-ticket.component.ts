import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/services/flight/flight.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  public addTicketForm: FormGroup;
  depart: Date | null;
  comeBack: Date | null;

  flights: Flight[] = [];
  selectedF: number = 1;
  companies: Company[] = [];
  selectedC: number = 1;
  
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private flightService: FlightService, private companyService: CompanyService,
              private ticketService: TicketService, private router: Router, private formBuilder: FormBuilder) {
    this.addTicketForm = this.formBuilder.group({
      flightId: ['', Validators.required],
      companyId: ['', Validators.required],
      depart: ['', Validators.required],
      comeBack: ['', Validators.required],
      availableCount: [0, Validators.required],
      oneWay: [false]
    })
  }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(flights => {
      this.flights = flights;
    })

    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }

  public get flight() {
    return this.addTicketForm.get('flightId');
  }

  public get company() {
    return this.addTicketForm.get('companyId');
  }

  public submitForm(credentials) {
    console.log(credentials);
    this.ticketService.addTicket(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
      location.reload();
    })
    location.reload();
  }
}
