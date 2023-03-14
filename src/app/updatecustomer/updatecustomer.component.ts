import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'projects/apiservice/src/lib/customerModel';
import { ApiserviceService } from 'projects/apiservice/src/public-api';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  model: any;

notify:string="";

constructor(private service:ApiserviceService, private router: Router) { }


  ngOnInit(): void 
  { //when controller is loaded, existing record needs to be retrieved.
  

    this.service.getacustomer("877").subscribe(upt=>{
      this.model=upt;
      console.log(this.model);
    });


  }


  putycustomer(){

    this.service.formdata=this.model;

   console.log(this.service.formdata);

  this.service.putcustomer(this.service.formdata.Id).subscribe(puy=>{

    console.log(puy);

    return puy;
  });
}

}
