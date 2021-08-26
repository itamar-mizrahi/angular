import { Component, OnInit } from '@angular/core';
import {FilterPipe} from '../filter.pipe'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes:[FilterPipe]
})
export class DirectoryComponent implements OnInit {
ninjas=[
  {name: "Yoshi", belt:'yellow'},
  {name: "Itamar", belt:'blue'},
  {name: "eden", belt:'red'}
]
  constructor() { 

  }

  ngOnInit() {
  }

}
