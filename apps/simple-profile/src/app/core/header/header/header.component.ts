import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthState } from '../../store/states/auth.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Logout } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'simple-profile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<boolean>;
  @Select(AuthState.username) username$: Observable<string>;

  constructor(private _store: Store, private _router: Router) {
  }

  logout(): void {
    this._store.dispatch(new Logout());
    this._router.navigate(['/auth/login'])
  }
}
