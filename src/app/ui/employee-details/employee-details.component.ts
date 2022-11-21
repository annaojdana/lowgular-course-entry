import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {EmployeeDetailsParamsModel} from "../../model/employee-details-params.model";
import {map} from "rxjs";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(param => ({id: param['id'],name:param['name']}))
  );

  constructor(private _activatedRoute: ActivatedRoute) {
  }
}
