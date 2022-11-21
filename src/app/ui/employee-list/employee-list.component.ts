import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {PeopleModel} from '../../model/people.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<PeopleModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.delete(id).subscribe(response =>
      response.status === "success" ? alert(`User was successfully removed.`) : alert("Bad request")
    );

  }
}
