import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  errorMsg:string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('.*[0-9].*')]]
    })
  }

  ngOnInit(): void {
  }

  public get username() {
    return this.loginForm.get('username')
  }

  public get password() {
    return this.loginForm.get('password')
  }

  public submitForm(credentials) {
    //console.log(credentials);
    this.authService.login(credentials).subscribe(data => {
      this.router.navigate(['/home'])
    },
    (error: HttpErrorResponse) => {
      this.errorMsg = error.error.massage;
    });
  }



}
