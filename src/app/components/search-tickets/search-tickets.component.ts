import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CityService } from 'src/app/services/city/city.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  public searchForm: FormGroup;

  origin: City[] = [];
  selectedO: number = 1;
  destination: City[] = [];
  selectedD: number = 1;

  constructor(private router: Router, private formBuilder: FormBuilder, private cityService: CityService, private ticketService: TicketService) { 
    this.searchForm = this.formBuilder.group({
      origin: [''],
      destination: [''],
      depart: [''],
      comeBack: [''],
    })
  }

  ngOnInit(): void {

    this.cityService.getAllCities().subscribe(cities => {
      this.origin = cities;
      this.destination = cities;
    })
  }

  public submitForm(credentials) {
    console.log(credentials);
    //this.ticketService.setSearch(credentials);
  }

}
