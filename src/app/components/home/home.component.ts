import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    //this.user = this.userService.getUserByUsername(this.userService.getUsername());
    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      //console.log(user);
      this.user = user;
    })
  }

}
