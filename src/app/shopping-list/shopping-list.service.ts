import {Injectable, EventEmitter} from '@angular/core'
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingrediant: Ingredient){
    this.ingredients.push(ingrediant);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
