import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/resturant/"
rooturl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getList(){
return this.http.get(this.url);
  }
  saveResto(data: any){
  
   return this.http.post(this.url,data)
  }
  deleteResto(id:any){
    return this.http.delete(this.url+id)
  }
  getCurrentresto(id:any){
      return this.http.get(this.url+id)
  }
  updateresto(id:any,data:any){
       return this.http.put(this.url+id,data)
   }
   resisterusers(data:any){
     return this.http.post(this.rooturl+"users",data)
   }
}
