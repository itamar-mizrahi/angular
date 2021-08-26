import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  .text{
    color:greenyellow;
}
  `]
})
export class AppComponent {
  showSecret =false;
  log=[];

  onToggleDetailes(){
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  }
}
