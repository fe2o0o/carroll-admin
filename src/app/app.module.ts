import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './dashbord/sidebar/sidebar.component';
import { AuctionsComponent } from './dashbord/auctions/auctions.component';
import { AuctionDetailsComponent } from './dashbord/auction-details/auction-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CompletedAuctionsComponent } from './dashbord/completed-auctions/completed-auctions.component';
import { AuctionBidsComponent } from './dashbord/auction-bids/auction-bids.component';
import { FeedbacksComponent } from './dashbord/feedbacks/feedbacks.component';
import { ContactsComponent } from './dashbord/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    SidebarComponent,
    AuctionsComponent,
    AuctionDetailsComponent,
    CompletedAuctionsComponent,
    AuctionBidsComponent,
    FeedbacksComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
