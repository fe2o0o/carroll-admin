import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private _ToastrService:ToastrService,private _Router:Router, private _AuthService:AuthService){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null , Validators.required)
  })


  handleLogin(form: FormGroup) {
    this._AuthService.login(form.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token)
        this._AuthService.decodedToken()
        this._Router.navigate(['/dashbord'])
      },
      error: (err) => {
        this._ToastrService.error(err.error.message , "Faild")
      }
    })
  }
}
