import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [ReactiveFormsModule, RouterModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
