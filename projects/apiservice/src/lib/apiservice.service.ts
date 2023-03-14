import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customerModel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {   

  //this is observable data to be observed by its caller such as app.component.ts
  //app.component.ts should subscribe those data publisher/subcribe pattern
  
  constructor(public httpclient:HttpClient) { 

  }

  readonly _baseUrl = "https://localhost:7129/api/"
  formdata:Customer =new Customer();
  custlist: Customer[] = [];

getcustomer()
{
  return this.httpclient.get(this._baseUrl+"customers");
}
postcustomer(){
  return this.httpclient.post(this._baseUrl+"customers", this.formdata);
}

putcustomer(id:string){
  return this.httpclient.put(this._baseUrl+"customers/"+id,  this.formdata);
}

deletecustomer(id:string){
  return this.httpclient.delete(this._baseUrl+"customers/"+id);
}


getacustomer(id:string)
{
  return this.httpclient.get(this._baseUrl+"customers/"+id);
}


}
