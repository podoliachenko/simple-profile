import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TuiValidationError } from '@taiga-ui/cdk';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Login } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { AuthState } from '../../store/states/auth.state';

@Component({
  selector: 'simple-profile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  inProgress = false;
  error: TuiValidationError = null;

  constructor(private _store: Store, private _cdr: ChangeDetectorRef, private _router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    if (this._store.selectSnapshot(AuthState.isAuthenticated)) {
      this._router.navigate(['/profile']);
    }
  }

  submit(): void {
    this.inProgress = true;
    this.error = null;
    this._store.dispatch(new Login(this.form.value))
      .pipe(
        finalize(() => {
          this.inProgress = false;
          this._cdr.detectChanges();
        })
      )
      .subscribe(
        () => {
          this._router.navigate(['/profile']);
        }, () => {
          this.error = new TuiValidationError('Неверный логин или пароль');
        });
  }

}
