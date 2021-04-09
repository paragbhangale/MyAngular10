import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
getData():Observable<any[]>
{
  let url="https://jsonplaceholder.typicode.com/todos/";
  return this.http.get<any[]>(url);
}
}
