import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyWithTickets } from 'src/app/model/companyWithTickets.model';
import { User } from 'src/app/model/user.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: CompanyWithTickets;
  user: User;
  public bookingForm: FormGroup;
  public companyForm: FormGroup;
  public companyEditForm: FormGroup;
  public errorMsgEdit: string = "";
  public errorMsgAdd: string = "";
  constructor(private router: Router, private companyService: CompanyService, private ticketService: TicketService,
    private userService: UserService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.bookingForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      username: ['']
    })
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
    this.companyEditForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })

    this.activatedRoute.paramMap.subscribe(params => {

      const id = Number(params.get('id'))
      console.log(id)

      this.companyService.getCompany(id).subscribe(company => {
        this.company = company;
      })
    })

  }

  deleteTicket(id) {
    console.log(id)
    this.ticketService.deleteTicket(id);
  }

  deleteCompany() {
    this.activatedRoute.paramMap.subscribe(params => {

      const id = Number(params.get('id'))
      console.log(id)
     
      this.companyService.deleteCompany(id);
    })
  }

  public submitForm(credentials, id) {
    //console.log(credentials, id);
    this.ticketService.addBookings(credentials, id).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/bookings']);
    });
  }

  public submitAddCompany(credentials) {
    console.log(credentials);
    this.companyService.addCompany(credentials).subscribe((returnObject: string) => {
      console.log('radi ovde');
      console.log(returnObject);
      location.reload();
    },
    (error: HttpErrorResponse) => {
      console.log(error.error.massage);
      this.errorMsgAdd = error.error.massage;
      //alert(error.error.massage);
    }
  );
    //location.reload();
  }

  public submitEditCompany(credentials) {
    console.log(credentials);
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      console.log(id)
      this.companyService.editCompany(credentials, id).subscribe((returnObject: string) => {
        console.log(returnObject);
      },
      (error: HttpErrorResponse) => {
        //console.log(error.error.massage);
        this.errorMsgEdit = error.error.massage;
      })
    })
    //location.reload();
  }

}
