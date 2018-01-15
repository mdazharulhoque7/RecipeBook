import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription:Subscription

  constructor(private recipeSercice: RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeSercice.recipeChanged.subscribe((recipes:Recipe[]) =>{
      this.recipes = recipes;
    })
    this.recipes = this.recipeSercice.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
