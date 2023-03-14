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


notify:string="";

model:Customer=new Customer();

constructor(private service:ApiserviceService, private router: Router) { }

  ngOnInit(): void 
  { //when controller is loaded, existing record needs to be retrieved.
    this.edited=false;
  }

public edited:boolean=false;
  getecustomer(id:string){
    this.service.getacustomer(id).subscribe(upt=>{
      this.model=<Customer>upt;
      this.edited=!this.edited;
      console.log(this.edited);

    });
  }

  showValue(event: any){
    this.model.id = event.target.value;
  }
  putycustomer(){
  this.service.formdata=this.model;
  this.service.putcustomer(this.service.formdata.id).subscribe(puy=>{
    window.location.reload();
    return puy;
  });
}

}
