import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Users1Component } from './users1/users1.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsertestComponent } from './usertest/usertest.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UsersModule } from './users/users.module';
// import { UserModule } from './user/user.module';
// import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EmployeeComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    Users1Component,
    // UserComponent,
    // AdminComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    AdminlistComponent,
    UserlistComponent,
    UsertestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgbModule.forRoot(),
    // UsersModule,
    // UserModule,
    // AdminModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
