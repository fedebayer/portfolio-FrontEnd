import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = environment.apiAuthUrl;

  constructor(private httpClient: HttpClient) {}

  public neww(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'add', newUser);
  }

  public login(loginUser: LoginUser): Observable<any> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }

  public refresh(dto: JwtDto): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'refresh', dto);
  }
}
