import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiServerUrl + `/persons/all`);
  }

  public addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiServerUrl + `/persons/add`, person);
  }

  public deletePersonById(id: number): Observable<Person> {
    return this.http.delete<Person>(this.apiServerUrl + `/persons/delete/${id}`);
  }

  public updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.apiServerUrl + `/persons/update`, person);
  }
}
