import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SoftSkill } from '../model/softSkill';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.apiServerUrl + `soft-skills`);
  }

  public addSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    return this.http.post<SoftSkill>(
      this.apiServerUrl + `soft-skills`,
      softSkill
    );
  }

  public deleteSoftSkillById(id: number): Observable<SoftSkill> {
    return this.http.delete<SoftSkill>(this.apiServerUrl + `soft-skills/${id}`);
  }

  public updateSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    return this.http.put<SoftSkill>(
      this.apiServerUrl + `soft-skills`,
      softSkill
    );
  }
}
