import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
//  {
//    path:'user',children:[
//     {path:'list',component:ListComponent},
//     {path:'login',component:LoginComponent}
//    ]
//  }
{path:'login',component:LoginComponent},
{path:'list',component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
