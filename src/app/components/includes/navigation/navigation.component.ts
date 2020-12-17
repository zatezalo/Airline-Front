import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.userService.getUserByUsername(this.userService.getUsername()).subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }

  logout(){
    localStorage.removeItem("jwt")
  }

}
