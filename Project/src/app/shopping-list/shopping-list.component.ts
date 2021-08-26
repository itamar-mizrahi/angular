import { Component, OnInit } from '@angular/core';
import { Ingridiate } from '../shared/Ingridiante.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingridiants:Ingridiate[]=[
  new Ingridiate('agg',2),
  new Ingridiate('cheese',3),

];

  constructor() { }

  ngOnInit() {
  }

}
