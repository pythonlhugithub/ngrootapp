import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiserviceModule } from "../../projects/apiservice/src/lib/apiservice.module";
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

import { ReactiveFormsModule } from '@angular/forms';  //now i want to create a form, so register module in root
import { FormsModule } from '@angular/forms';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';


@NgModule({
    declarations: [
        AppComponent,
        AddcustomerComponent,
        DeletecomponentComponent,
        UpdatecustomerComponent
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        ApiserviceModule,
        HttpClientModule, ReactiveFormsModule
       
    ]
})
export class AppModule { 
  
}

