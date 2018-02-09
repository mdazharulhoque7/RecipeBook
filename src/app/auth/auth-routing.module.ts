/**
 * Created by Azharul on 2/9/2018.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import auth = firebase.auth;

const authRoutes:Routes = [
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent}
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
