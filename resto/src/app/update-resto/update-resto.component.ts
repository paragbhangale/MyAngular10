import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  editResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private rest:RestoService) { }

  ngOnInit(): void {
   // console.warn("id",this.router.snapshot.params.id)
    this.rest.getCurrentresto(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editResto=new FormGroup({
        name:new FormControl(result['name']),
        email:new FormControl(result['email']),
        address:new FormControl(result['address']),
      })
    })
  }
  collectResto(){
    this.rest.updateresto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
      console.warn(result)
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
