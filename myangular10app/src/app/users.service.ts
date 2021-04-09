import { Injectable } from '@angular/core';
import { dataType } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    return {
      name:'Chintan',
      age:30,
      id:100
    }
  }
  getUserData(){
    const data:dataType= {
      name:'Parag',
      id:20,
      indian:true,
      address:'Mumbai'
    }
    return data;
  } 
}
