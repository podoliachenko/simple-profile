import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-profile-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
