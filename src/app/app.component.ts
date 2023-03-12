import { Component } from '@angular/core';
import { ApiserviceComponent } from 'projects/apiservice/src/public-api';
import {ApiserviceService} from 'projects/apiservice/src/lib/apiservice.service'
import { Customer } from 'projects/apiservice/src/lib/customerModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicliz';

 cust:any[]=[];

  constructor(public apicall:ApiserviceService){
  console.log(this.apicall.getcustomer());

  this.apicall.getcustomer().forEach(lst=>{
    this.cust.push(lst);
  });

   
 
  }

  
}
