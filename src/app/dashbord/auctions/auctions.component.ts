import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent {
    constructor(private _HttpClient:HttpClient) {

  }
  auctions: any;
  allAuctions: any;
  ngOnInit(): void {
    this.getAuctionsRequest();
    this.getAllAuctions();
  }

  getAuctionsRequest() {
         this._HttpClient.get('http://localhost:3000/api/v1/admin/auctionsRequest', {
        headers: {
            token:`${localStorage.getItem('token')}`
          }
      }).subscribe({
        next: (res) => {
          this.auctions = res;
          }
      })
  }
  getAllAuctions() {
         this._HttpClient.get('http://localhost:3000/api/v1/admin/AllAuctions', {
        headers: {
            token:`${localStorage.getItem('token')}`
          }
      }).subscribe({
        next: (res) => {
          this.allAuctions = res;
          }
      })
  }


}
