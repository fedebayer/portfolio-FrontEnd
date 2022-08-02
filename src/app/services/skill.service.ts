import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiServerUrl + `/skills/all`);
  }

  public addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiServerUrl + `/skills/add`, skill);
  }

  public deleteSkillById(id: number): Observable<Skill> {
    return this.http.delete<Skill>(this.apiServerUrl + `/skills/delete/${id}`);
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(this.apiServerUrl + `/skills/update`, skill);
  }
}
