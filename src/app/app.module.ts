import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiserviceModule } from "../../projects/apiservice/src/lib/apiservice.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApiserviceModule,
        HttpClientModule
    ]
})
export class AppModule { 
  
}
