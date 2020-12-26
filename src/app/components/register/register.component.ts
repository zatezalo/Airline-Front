import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  items: any[] = [
    //{ val: null, name: 'Choose...' },
    { val: 'ADMIN', name: 'Admin' },
    { val: 'USER', name: 'User' },
  ];
  selected: number = 1;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('.*[0-9].*')]],
      userType: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  public get username() {
    return this.registerForm.get('username')
  }

  public get password() {
    return this.registerForm.get('password')
  }

  public get userType() {
    return this.registerForm.get('userType')
  }

  selectOption(val: string) {
    //getted from event
    console.log(val);
    //getted from binding
    console.log(this.selected)
  }

  public submitForm(credentials) {
    console.log(credentials);
    this.authService.register(credentials).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
    })
    //this.router.navigate(['/']);
  }
}
