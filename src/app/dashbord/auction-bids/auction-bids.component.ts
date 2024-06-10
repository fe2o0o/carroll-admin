import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auction-bids',
  templateUrl: './auction-bids.component.html',
  styleUrls: ['./auction-bids.component.css']
})
export class AuctionBidsComponent implements OnInit {
  constructor(private _ToastrService:ToastrService,private _HttpClient:HttpClient,private _ActivatedRoute:ActivatedRoute){}

  auctionId: any;
  bids:any[]=[]

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.auctionId = res['id']
        this.getBids(this.auctionId)
      }
    })
  }


  getBids(id:any) {
    this._HttpClient.get(`http://localhost:3000/api/v1/admin/auctionBids/${id}`, {
      headers: {
        token:`${localStorage.getItem('token')}`
      }
    }).subscribe({
      next: (res: any) => {

        this.bids = res.data;
        console.log(this.bids);
      }
    })
  }


  getClass(status:any):string {
    if (status == 'reject') {
      return 'text-danger'
    } else {
      return 'text-success'
    }
  }

  acceptBid(id: any) {
    console.log(id);

    this._HttpClient.put(`http://localhost:3000/api/v1/admin/acceptAuction/${id}`, {}, {
      headers: {
        token:`${localStorage.getItem('token')}`
      }
    }).subscribe({
      next: (res) => {
        console.log(res);

        this._ToastrService.success("Bid Accepted", "Success")
        this.getBids(this.auctionId)
      }
    })
  }

  rejectBid(id: any) {
        this._HttpClient.put(`http://localhost:3000/api/v1/admin/rejectAuction/${id}`, {}, {
      headers: {
        token:`${localStorage.getItem('token')}`
      }
    }).subscribe({
      next: (res) => {
        console.log(res);

        this._ToastrService.success("Bid Rejected", "Success")
        this.getBids(this.auctionId)
      }
    })
  }

  roomForm: FormGroup = new FormGroup({
    location:new FormControl(null , Validators.required),
    cap:new FormControl(null , Validators.required),
    price:new FormControl(null , Validators.required),
    date:new FormControl(null , Validators.required)
  })

  handleRomm(form: FormGroup) {
    let data = form.value;

    data.auctionId = this.auctionId;
    this._HttpClient.post('http://localhost:3000/api/v1/admin/showroom', data, {
      headers: {
        token:`${localStorage.getItem('token')}`
      }
    }).subscribe({
      next: (res) => {
        this._ToastrService.success("ShowRoom Created", "Sucess");
        this.roomForm.reset()
      }
    })

  }
}
