import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { 
    this.authError = "CONSTRUCT";
    console.log("first " + this.authError)
  }

  ngOnInit() {
    console.log(this.authError);
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
      console.log(this.authError);
    });
    this.authError = "INIT";
    console.log(this.authError);
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

}
