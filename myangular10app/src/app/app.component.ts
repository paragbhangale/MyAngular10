import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
 //template:'<h1>Hello World</h1>',
  styleUrls: ['./app.component.css']
 // styles:['h1{background-color:orange}']
})
export class AppComponent {
  userData= [] as any;
  name="";
  
  namep="";
  currentVal=""
  // title = 'My Angular 10 Application';
   //name='parag bhangale';
   today=Date.now();
   str='Hello Angular';
   money=100;
  //show=false;
  show='blue';
  color='green';
  color1='orange';
  err=true;
  users=[{
    name:'Parag',
    age:25,
    address:'Noida'
  },
  {
    name:'Parag1',
    age:15,
    address:'Noida1'
  },
]
  data5=[{
    name:'Parag',
    age:'32',
    email:'parag@gmail.com'
  },
  {
    name:'Parag1',
    age:'321',
    email:'parag1@gmail.com'
  }
]
  data=['Parag','Ravi','Sagar','Pravin']
  data2=[
    {
      Name:'Parag',
      Age:22
    },
    {
      Name:'Ravi',
      Age:23
    },
    {
      Name:'Sagar',
      Age:24
    },
    {
      Name:'Pravin',
      Age:25
    }
  ]
  // obj={
  //   name:'parag',
  //   age:20
  // }
  // arr=['Parag','Sagar','Ravi']
  // a=100;
  // b=20;
  // siteUrl=window.location.href;
  getName(namep: any){
    //return 'Parag Bhangale from Func'
    //this.name;
    alert(namep);
  }
  myEvent(evt: any){
console.warn(evt)
  }
  getVal(val:any){
    console.warn(val)
    this.currentVal=val
  }
  disableBox=true;
  enableBox(){
this.disableBox=false;
  }
  updateColor()
  {
    this.color1='blue';
    this.err=!this.err;
  }
  parentFunction(data: any){
    console.warn(data);
    this.namep=data.name;
  }
  constructor(private user:UsersService,private user1:UserServiceService,private vcR:ViewContainerRef,private cfr:ComponentFactoryResolver)
  {
    

    this.user1.getData().subscribe(datauser=>{
      console.warn(datauser);
      this.userData=datauser;
    })
    console.warn(this.user.getData())
    let data=this.user.getData()
    this.name=this.user.getData().name;//or
    this.name=data.name
  }
 async loadAdmin(){
    this.vcR.clear();
   const {AdminlistComponent}=await import('./adminlist/adminlist.component')//When we are using import then it is mandatory to use async and await
   this.vcR.createComponent(
     this.cfr.resolveComponentFactory(AdminlistComponent)
   )
  }
  async loadUser(){
    this.vcR.clear();
    const {UserlistComponent}=await import('./userlist/userlist.component')//When we are using import then it is mandatory to use async and await
    this.vcR.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
  // onSubmit(data: any){
  //   console.warn(data.useremail);
  //   console.warn(data.password);
  // }
  userData2={
    email:"test@test.com",
    address:"123",
    mobile:"12345"
  }
  onSubmit(data:any){
    console.warn(data);
  }
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl(''),
    address: new FormControl('',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z ]*')
    ]),
  })
  getemail(){return this.loginForm.get('email')}
  address(){return this.loginForm.get('address')}
  // collectData(){
  //   console.warn(this.loginform.value);
  // }
  onLogin(){
    console.warn(this.loginForm.value);
  }
}
