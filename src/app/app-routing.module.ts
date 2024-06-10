import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuctionsComponent } from './dashbord/auctions/auctions.component';
import { AuctionDetailsComponent } from './dashbord/auction-details/auction-details.component';
import { CompletedAuctionsComponent } from './dashbord/completed-auctions/completed-auctions.component';
import { AuctionBidsComponent } from './dashbord/auction-bids/auction-bids.component';
import { FeedbacksComponent } from './dashbord/feedbacks/feedbacks.component';
import { ContactsComponent } from './dashbord/contacts/contacts.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  {path:"login" , component:LoginComponent},
  {
    path: "dashbord", component: DashbordComponent, children: [
      { path: '', redirectTo: 'auctions', pathMatch: 'full' },
      { path: "auctions", component: AuctionsComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "feedbacks", component: FeedbacksComponent },
      { path: "auction-details/:id", component: AuctionDetailsComponent },
      { path: "auction-bids/:id", component: AuctionBidsComponent },
      {path:"completed-auctions" , component:CompletedAuctionsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
