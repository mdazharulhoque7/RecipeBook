import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1508180092/broccoli-cheddar-quiche-sweet-potato-recipe.jpg?itok=-_FsGoP5'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1508180092/broccoli-cheddar-quiche-sweet-potato-recipe.jpg?itok=-_FsGoP5')
  ];

  constructor() { }

  ngOnInit() {
  }

}
