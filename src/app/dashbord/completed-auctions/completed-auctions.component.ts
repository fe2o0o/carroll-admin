import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-completed-auctions',
  templateUrl: './completed-auctions.component.html',
  styleUrls: ['./completed-auctions.component.css']
})
export class CompletedAuctionsComponent implements OnInit {
  constructor(private _HttpClient:HttpClient){}
  allAuctions: any;
  ngOnInit(): void {
      this.getAllAuctions()
  }
  getAllAuctions() {
    this._HttpClient.get('http://localhost:3000/api/v1/admin/completedAuction', {
      headers: {
          token:`${localStorage.getItem('token')}`
        }
    }).subscribe({
      next: (res:any) => {
        this.allAuctions = res.data;
        console.log(this.allAuctions);

        }
    })
  }
}
