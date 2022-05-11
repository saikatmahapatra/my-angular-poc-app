import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  isLoggedIn = false; // parent to child
  
  
  // child to parent
  btnClickedCounter = 0;
  checkIfLoginClicked(event: any) {
    this.btnClickedCounter++;
  }
}
