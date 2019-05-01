import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentTitle = 'I am bwm app';
  clickHandler(){
    alert("I am clicked");
  }
}
