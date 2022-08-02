import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiServerUrl + `/languages/all`);
  }

  public addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(this.apiServerUrl + `/languages/add`, language);
  }

  public deleteLanguageById(id: number): Observable<Language> {
    return this.http.delete<Language>(this.apiServerUrl + `/languages/delete/${id}`);
  }

  public updateLanguage(language: Language): Observable<Language> {
    return this.http.put<Language>(this.apiServerUrl + `/languages/update`, language);
  }
}
