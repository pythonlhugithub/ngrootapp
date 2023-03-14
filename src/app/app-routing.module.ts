import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import {UpdatecustomerComponent} from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  { path: 'add-customer', component: AddcustomerComponent },
  { path: 'del-customer', component: DeletecomponentComponent },
  {path: 'put-customer', component: UpdatecustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
