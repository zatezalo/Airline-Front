import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  public user: User;
  blocker = new Date();
  constructor(private userService: UserService, private bookingService: BookingsService, private router: Router) { 
    this.user = new User();
    this.blocker.setDate(this.blocker.getDate() - 1);
  }

  ngOnInit(): void {
    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }
  
  addBooking(id) {
    this.bookingService.addBooking(id);
    location.reload();
  }

  deleteBooking(id) {
    this.bookingService.deleteBooking(id);
    location.reload();
  }

}
