import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiServerUrl + `languages`);
  }

  public addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(this.apiServerUrl + `languages`, language);
  }

  public deleteLanguageById(id: number): Observable<Language> {
    return this.http.delete<Language>(this.apiServerUrl + `languages/${id}`);
  }

  public updateLanguage(language: Language): Observable<Language> {
    return this.http.put<Language>(this.apiServerUrl + `languages`, language);
  }
}
