import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { HomeComponentModule } from './ui/home/home.component-module';

const routes: Routes = [{ path: 'create-employee', component: EmployeeFormComponent }, { path: 'employee-list', component: EmployeeListComponent }, { path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeFormComponentModule, EmployeeServiceModule, EmployeeListComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
