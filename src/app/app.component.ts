import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCMHjILRvkryZzIDRedwSlmHCDvJYwA3xY",
      authDomain: "ng-recipe-book-azhar.firebaseapp.com"
    })
  }
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
