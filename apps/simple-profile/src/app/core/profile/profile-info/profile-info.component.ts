import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@simple-profile/api-interfaces';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'simple-profile-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  profile$: Observable<User>;

  constructor(private _profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profile$ = this._profileService.getProfile();
  }
}
