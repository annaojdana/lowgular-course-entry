import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PeopleModel } from '../model/people.model';
import { CreateNewEmployeeModel } from '../model/create-new-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PeopleModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>("https://dummy.restapiexample.com/api/v1/employees"
    ).pipe(
      map((response:ApiResponse<EmployeeResponse[]>):PeopleModel[] => {
        return response.data.map((employeeResponse:EmployeeResponse) => {
          return {
            name:employeeResponse.employee_name,
            personalNumber:employeeResponse.id,
            img:employeeResponse.profile_image,
            mail: employeeResponse.employee_name + '@lowgular.io'
          }
        })

    })
    );
  }

  create(employee: CreateNewEmployeeModel): Observable<CreateNewEmployeeModel> {
    return this._httpClient.post<CreateNewEmployeeModel>("https://dummy.restapiexample.com/api/v1/create", employee);
  }

  delete(id: string): Observable<CreateNewEmployeeModel> {
    return this._httpClient.delete<CreateNewEmployeeModel>('https://dummy.restapiexample.com/api/v1/delete/'+id);
  }
}
