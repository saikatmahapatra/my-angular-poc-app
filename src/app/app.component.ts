import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './shared/data.service';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  isLoggedIn = false; // parent to child
  msg = '';

  @ViewChild(LoginComponent)
  private loginC!: LoginComponent;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.currentMsg.subscribe(data => {
      this.msg = data + ' ' +this.btnClickedCounter + ' times';
    })
  }
  
  // child to parent
  btnClickedCounter = 0;
  checkIfLoginClicked(event: any) {
    this.btnClickedCounter++;
  }
}
