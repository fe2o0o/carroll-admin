import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 constructor(private _HttpClient: HttpClient) { }

  contacts: any;
  ngOnInit(): void {
    this._HttpClient.get('http://localhost:3000/api/v1/admin/contacts', {
      headers: {
            token:`${localStorage.getItem('token')}`
        }
    }).subscribe({
      next: (res: any) => {

          this.contacts = res.data
        console.log(this.contacts);

      }
      })
  }
}
