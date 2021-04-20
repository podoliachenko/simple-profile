export interface SetNewPasswordPayload {
  username: string;
  token: string;
  password: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export type RegisterPayload = LoginPayload

export class Register {
  static readonly type: string = '[Auth] Register';

  constructor(public payload: RegisterPayload) {
  }
}

export class SetNewPassword {
  static readonly type: string = '[Auth] SetNewPassword';

  constructor(public payload: SetNewPasswordPayload) {
  }
}

export class Login {
  static readonly type: string = '[Auth] Login';

  constructor(public payload: LoginPayload) {
  }
}

export class Logout {
  static readonly type: string = '[Auth] Logout';
}

export class SetToken {
  static readonly type: string = '[Auth] SetToken';

  constructor(public token: string) {
  }
}
