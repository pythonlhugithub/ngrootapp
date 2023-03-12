import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'lib-apiservice',
  template:
    `
    <p>
      apiservice works! this will be displayed in index.html
         {{title}} 
    </p>
   `
  ,
  styles: []
})
export class ApiserviceComponent implements OnInit {
   
  ct:number=0;
    title="this is sub service liz dddddddddddddddddddddddd";
  constructor(private apis:ApiserviceService) { 
 
  }

  custlist:any[]=[];
cst:any;

  ngOnInit(): void {
    
    this.apis.getcustomer().forEach(list=>{
      this.custlist.push(list);
     // console.log(this.custlist);
      this.ct=this.custlist.length;
      
    });



  }



}
