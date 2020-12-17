import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  public addTicketForm: FormGroup;

  flights: Ticket[] = [];
  companies: Company[] = [];
  selectedF: number = 1;
  
  constructor(private ticketService: TicketService, private router: Router, private formBuilder: FormBuilder) {
    this.addTicketForm = this.formBuilder.group({
      flight: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public get flight() {
    return this.addTicketForm.get('flight');
  }

  public get company() {
    return this.addTicketForm.get('company');
  }

  public submitForm(credentials) {
    console.log(credentials);
    /*this.ticketService.register(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
    })*/
  }
}
