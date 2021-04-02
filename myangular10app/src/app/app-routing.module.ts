import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path:'user-list',component:UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UsersModule],
  exports: [RouterModule,UsersModule]
})
export class AppRoutingModule { }
