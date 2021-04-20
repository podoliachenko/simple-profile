import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@simple-profile/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) {
  }

  getProfile(): Observable<User> {
    return this._http.get<User>('/api/profile');
  }
}
