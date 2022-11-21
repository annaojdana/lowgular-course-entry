import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {CreateNewEmployeeModel} from '../../model/create-new-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateNewEmployeeModel) {
    this._employeeService.create(form).subscribe(
      response =>

        response.status === "success" ? alert(`User was successfully added to the database. Email: ${form.name},  ${form.age} Salary: ${form.salary}`) : alert('Bad request')
    );
  }


}
