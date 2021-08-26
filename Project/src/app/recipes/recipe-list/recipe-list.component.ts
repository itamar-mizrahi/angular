import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[]=[
  new Recipe('agges','how to make agges', 'https://images.pexels.com/photos/793770/pexels-photo-793770.jpeg?cs=srgb&dl=black-background-bread-cholesterol-793770.jpg&fm=jpg'),
  new Recipe('agges','how to make agges', 'https://images.pexels.com/photos/793770/pexels-photo-793770.jpeg?cs=srgb&dl=black-background-bread-cholesterol-793770.jpg&fm=jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
