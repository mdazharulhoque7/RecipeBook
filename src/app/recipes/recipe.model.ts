import {Ingretient} from "../shared/intredient.model";
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingretient[]

  constructor(name:string, desc:string, imagePath:string, ingredients:Ingretient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
