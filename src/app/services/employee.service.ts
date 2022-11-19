import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PeopleModel} from '../model/people.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PeopleModel[]> {
    return this._httpClient.get<PeopleModel[]>("assets/data/people.json");
  }

  create(people: Omit<PeopleModel, 'personalNumber'>): Observable<PeopleModel> {
    return this._httpClient.post<PeopleModel>("assets/data/people.json", people);
  }
}
