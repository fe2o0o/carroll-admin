import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  constructor(private _Router:Router,private _AuthService: AuthService,private _HttpClient:HttpClient) {

  }

  auctions:any;

  logOut() {
    this._AuthService.logOut()
    this._Router.navigate(['/login'])
  }

}
