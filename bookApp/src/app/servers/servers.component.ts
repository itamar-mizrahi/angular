import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: '.app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus= 'No server was created';
  serverName='Testserver';
  serverCreated=false;
  servers=['testServer','testServer2']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer= true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus=`Server Was Created! with the name ${this.serverName}`
  }

  onUpdateServerName(event: Event){
      this.serverName=(<HTMLInputElement>event.target).value;
 
  }
}
