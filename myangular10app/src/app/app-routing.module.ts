import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  // {path:'user-list',component:UserListComponent},
  // {path:'user',component:UserComponent},
  // {path:'admin',component:AdminComponent},
  // // {path:'login',component:LoginComponent},
  // {path:'Signup',component:SignupComponent},
  // {path:'**',component:PageNotFoundComponent}
  {path:"admin",loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)  
  },
  {path:"user",loadChildren:()=>import('./user123/user123.module')
    .then(mod=>mod.User123Module)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UsersModule,AdminModule],
  exports: [RouterModule,UsersModule]
})
export class AppRoutingModule { }
