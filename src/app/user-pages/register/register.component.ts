import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router) { 
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  postData(registerForm){
    this.submitted = true;
  }

  get formControl(){
    return this.registerForm.controls;
  }
}
