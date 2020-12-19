import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      company: [''],
      origin: [''],
      destination: [''],
      depart: [''],
      comeBack: [''],
    })
  }

  ngOnInit(): void {
  }

  public submitForm(credentials) {
    console.log(credentials);
    /*this.ticketService.addTicket(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
    })*/
  }

}
