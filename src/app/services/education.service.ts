import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiServerUrl + `/educations`);
  }

  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      this.apiServerUrl + `/educations`,
      education
    );
  }

  public deleteEducationById(id: number): Observable<Education> {
    return this.http.delete<Education>(this.apiServerUrl + `/educations/${id}`);
  }

  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(
      this.apiServerUrl + `/educations`,
      education
    );
  }
}
