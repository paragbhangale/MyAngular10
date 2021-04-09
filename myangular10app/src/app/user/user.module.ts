import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

console.log("user module loaded");
@NgModule({
  declarations: [ListComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
