import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit{
  constructor(private _HttpClient: HttpClient) { }

  feedbacks: any;
  ngOnInit(): void {
    this._HttpClient.get('http://localhost:3000/api/v1/admin/feedbacks', {
      headers: {
            token:`${localStorage.getItem('token')}`
        }
    }).subscribe({
      next: (res:any) => {
          this.feedbacks = res.data
        }
      })
  }
}
