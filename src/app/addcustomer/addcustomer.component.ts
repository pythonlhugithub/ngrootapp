import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from 'projects/apiservice/src/lib/apiservice.service'
import { Customer } from 'projects/apiservice/src/lib/customerModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

model: Customer = new Customer();

notify:string="";

constructor(private service:ApiserviceService, private router: Router) { }

  ngOnInit(): void {
  // this.model.Address="test add";
  // this.model.Id="55";
  // this.model.Name="steven fect";
  // this.model.City="asuw";
  // this.model.PostalCode="12121";
  // this.model.Email="baca@sdsd.com";
  // this.model.Region="nsw";
  // this.model.Country="Mars";
  }

  addcustomer(){
    console.log(this.model);
    this.service.formdata=this.model;
    this.service.postcustomer().subscribe(
      add=>{
            this.notify="the new customer has been inserted sucessfully";
           // this.router.navigate(['/']);
            window.location.reload();
           return add; //pass data in , this is all, if successful, return ture, or false
    }
    );
  }
}
