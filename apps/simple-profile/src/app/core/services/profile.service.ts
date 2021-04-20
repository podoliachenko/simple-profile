import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangePasswordParams, PatchProfileParams, User } from '@simple-profile/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) {
  }

  getProfile(): Observable<User> {
    return this._http.get<User>('/api/profile');
  }

  changePassword(payload: ChangePasswordParams): Observable<User> {
    return this._http.patch<User>('/api/profile/change-password', payload);
  }

  changeUserInfo(payload: PatchProfileParams): Observable<User> {
    return this._http.patch<User>('/api/profile', payload);
  }
}
