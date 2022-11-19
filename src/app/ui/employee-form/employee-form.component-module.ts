import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';
import {RouterModule} from "@angular/router";
import {EmployeesFacesComponentModule} from "../employees-faces/employees-faces.component-module";

@NgModule({
  imports: [ReactiveFormsModule, RouterModule, EmployeesFacesComponentModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
