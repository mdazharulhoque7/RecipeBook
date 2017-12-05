import { Component, OnInit } from '@angular/core';
import {Ingretient} from "../shared/intredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingretient[] = [
    new Ingretient('Apples',5),
    new Ingretient('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
