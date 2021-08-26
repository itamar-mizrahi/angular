import { Component, OnInit, Output, ViewChild  } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput',{static:true}) serverContentInput;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement,contentInput: HTMLInputElement){
    console.log(this.serverContentInput);
    
    // this.serverCreated.emit({
    //   serverName:nameInput.value, 
    //   serverContent: contentInput.value
    // });
  }
  onAddBlueprint(nameInput: HTMLInputElement,contentInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent: contentInput.value
    });
  }


}
