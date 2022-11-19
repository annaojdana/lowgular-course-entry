import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import {RouterModule} from "@angular/router";
import {EmployeesFacesComponentModule} from "../employees-faces/employees-faces.component-module";

@NgModule({
  imports: [CommonModule, RouterModule, EmployeesFacesComponentModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent],
})
export class EmployeeListComponentModule {}
