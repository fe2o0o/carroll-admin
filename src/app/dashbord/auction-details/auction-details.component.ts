import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {

  constructor(private _ToastrService:ToastrService,private _ActivatedRoute:ActivatedRoute,private _HttpClient:HttpClient){}
  id: any;
  data: any;
  user: any;
  car: any;
  images: any;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.id =res['id']
        this.spacificAuction(this.id)

      }
    })
  }

  rejectForm: FormGroup = new FormGroup({
    message:new FormControl(null , Validators.required)
  })

  spacificAuction(id:any) {
        this._HttpClient.get(`http://localhost:3000/api/v1/admin/auction-details/${id}`, {
      headers: {
          token:`${localStorage.getItem('token')}`
        }
    }).subscribe({
      next: (res) => {
        this.data = res;
        this.user = this.data?.data[0]?.user;
        this.car = this.data?.data[0]?.car
        this.images = this.car?.images;
      }
    })
  }

  acceptAuction(id: any) {
    this._HttpClient.put('http://localhost:3000/api/v1/admin/acceptAuction', {
      auctionId:id
    },
      {
        headers: {
        token:`${localStorage.getItem('token')}`
      }
      }).subscribe({
        next: (res) => {
          this._ToastrService.success("Auction Accepted", "Success")
          this.spacificAuction(this.id)
        }
    })
  }

  handleReject() {
    $('.rejected').slideToggle(500)
  }

  rejectAuction(form:FormGroup) {
    this._HttpClient.put('http://localhost:3000/api/v1/admin/rejectAuction', {
      auctionId: this.id,
      message:form.value.message
    },
      {
        headers: {
        token:`${localStorage.getItem('token')}`
      }
      }).subscribe({
        next: (res) => {
          this.handleReject()
          this._ToastrService.success("Auction Rejected", "Success")
          this.spacificAuction(this.id)
        }
    })
  }

}
