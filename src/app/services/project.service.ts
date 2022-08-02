import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiServerUrl + `/projects/all`);
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiServerUrl + `/projects/add`, project);
  }

  public deleteProjectById(id: number): Observable<Project> {
    return this.http.delete<Project>(this.apiServerUrl + `/projects/delete/${id}`);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.apiServerUrl + `/projects/update`, project);
  }
}
