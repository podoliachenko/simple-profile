import { Injectable } from '@angular/core';
import { LoginPayload } from '../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponseModel } from '../store/states/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
  }

  logIn(payload: LoginPayload): Observable<AuthResponseModel> {
    return this._http.post<AuthResponseModel>('/api/auth/login', payload);
  }
}
