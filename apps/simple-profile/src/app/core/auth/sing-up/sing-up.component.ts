import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Login, Registration } from '../../store/actions/auth.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'simple-profile-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {


  form: FormGroup;
  inProgress = false;
  error: TuiValidationError;

  constructor(private _store: Store, private _router: Router, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('')
    }, {validators: this.checkPasswords});
  }

  submit(): void {
    this.inProgress = true;
    this.error = null;
    this._store.dispatch(new Registration(this.form.value))
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
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true }
  }
}
