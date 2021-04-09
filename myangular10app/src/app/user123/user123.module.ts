import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User123RoutingModule } from './user123-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
console.log("user123 module loaded");

@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    User123RoutingModule
  ]
})
export class User123Module { }
