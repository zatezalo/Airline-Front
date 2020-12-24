import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
   // http://localhost:4200/
   { path: '', component: LoginComponent},
   // http://localhost:4200/register
   { path: 'register', component: RegisterComponent},
   // http://localhost:4200/home
   { path: 'home', component: HomeComponent},
   // http://localhost:4200/ticket
   { path: 'ticket/:id', component: EditTicketComponent},
   // http://localhost:4200/company
   { path: 'company/:id', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
