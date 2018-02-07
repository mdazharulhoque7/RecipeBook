/**
 * Created by azharul on 2/7/2018.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  declarations:[
    DropdownDirective
  ],
  exports:[
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule{}
