import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
 //template:'<h1>Hello World</h1>',
  styleUrls: ['./app.component.css']
 // styles:['h1{background-color:orange}']
})
export class AppComponent {
  currentVal=""
  // title = 'My Angular 10 Application';
   name='Parag';
  //show=false;
  show='blue';
  color='green';
  color1='orange';
  err=true;
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
}

