import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, 
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
  }

  createAccount(){
    this.router.navigate(['/register'])
  }
  
  navigateToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  postData(loginForm){
    this.submitted = true;
  }

  get formControl(){
    return this.loginForm.controls;
  }
}
