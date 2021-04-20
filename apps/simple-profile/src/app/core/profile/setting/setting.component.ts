import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@simple-profile/api-interfaces';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'simple-profile-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  profile$: Observable<User>;

  constructor(private _profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profile$ = this._profileService.getProfile();
  }

}
