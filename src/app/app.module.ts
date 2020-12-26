import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/includes/navigation/navigation.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { SearchTicketsComponent } from './components/search-tickets/search-tickets.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { CompanyComponent } from './components/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavigationComponent,
    AddTicketComponent,
    AllTicketsComponent,
    SearchTicketsComponent,
    EditTicketComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
