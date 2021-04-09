import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users1',
  templateUrl: './users1.component.html',
  styleUrls: ['./users1.component.css']
})
export class Users1Component implements OnInit {
@Input() hero: any;
@Output() data1111:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    // console.log(this.hero.name);
    // console.log(this.hero.email);
    
  }
  sendData(){
    let data={name:'Parag',age:26}
    this.data1111.emit(data)
  }

}
