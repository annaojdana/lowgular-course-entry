import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({name: new FormControl(), age: new FormControl()});

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create(
      {
        name: employeeForm.get('name')?.value,
        age: employeeForm.get('age')?.value,
        img: employeeForm.get('img')?.value,
        mail:employeeForm.get('mail')?.value
      }
    ).subscribe();
  }
}
