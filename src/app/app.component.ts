import { Component } from '@angular/core';
import {ApiserviceService} from 'projects/apiservice/src/lib/apiservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicliz';
  cust:any[]=[];
constructor(public apicall:ApiserviceService)
  {
  this.apicall.getcustomer().subscribe(lst=>{this.cust.push(lst)});
  }
  
}
