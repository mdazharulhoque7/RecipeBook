/**
 * Created by Azharul on 2/9/2018.
 */

import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/hader.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule{}
