import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { MatchPassword } from '../match-password';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  res: any;
  pattern = 'a-zA-Z0-9!$'

  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.pattern(/^[a-zA-Z0-9!$]+$/)
    ]),
    email: new FormControl('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ])
  }, { validators: [this.passwordValidator.validate]});


  constructor(
      private authService: AuthService,
      private passwordValidator: MatchPassword
  ) { }

  ngOnInit(): void {}

  onSubmit(){
  
    console.log('calling service...');
    this.authService.signup().subscribe({
      next: (val) => {
        console.log("Yay success\n " + val);
        this.res = val;
      },
      error: (err) => {
        console.log("Error\n " + err);
      }
    });
  }
  signIn(){}
  
}
