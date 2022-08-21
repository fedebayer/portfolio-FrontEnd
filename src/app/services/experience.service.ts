import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiServerUrl + `/experiences`);
  }

  public addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(
      this.apiServerUrl + `/experiences`,
      experience
    );
  }

  public deleteExperienceById(id: number): Observable<Experience> {
    return this.http.delete<Experience>(
      this.apiServerUrl + `/experiences/${id}`
    );
  }

  public updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      this.apiServerUrl + `/experiences`,
      experience
    );
  }
}
