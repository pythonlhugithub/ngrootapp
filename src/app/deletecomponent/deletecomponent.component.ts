import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'projects/apiservice/src/lib/customerModel';
import { ApiserviceService } from 'projects/apiservice/src/public-api';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.css']
})
export class DeletecomponentComponent implements OnInit {
  notify:string="";
  model:Customer=new Customer();
  constructor(private service:ApiserviceService, private router: Router) { }
  ngOnInit(): void { }
  delcustomer(id:string){
    this.service.deletecustomer(id).subscribe(del=>{
      window.location.reload();
      this.notify="delete is successful";
      return del;
    })
  }
}
