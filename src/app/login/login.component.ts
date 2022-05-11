import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../shared/custom.validator';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  @Input() isUserLoggedIn: any; // child reveived value from parent  to child 

  @Output() isLoginButtonClicked = new EventEmitter();

  ngOnInit(): void {
  }
  
  firstName: any;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(30), emailValidator]],
    password: ['', [Validators.required]]
  });
  



  hasError(controlName: any, ruleName: any) {
    let hasError = false;
    let control = this.loginForm.controls[controlName];
    if(control.invalid && (control.dirty || control.touched)) {
      for(let rule in control.errors) {
        console.log(rule)
        if(ruleName === rule) {
          hasError = control.errors[rule];
        }
      }
    }
    return hasError;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  login(){
    console.log(this.loginForm.value);
    //this.hasError();
    if(this.loginForm.invalid) {
      this.validateAllFormFields(this.loginForm);
    }
  }

  sendToParent(){
    this.isLoginButtonClicked.emit(true);
    this.ds.changeMessage('you clicked button');
  }
}
