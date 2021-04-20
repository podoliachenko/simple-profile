export type Gender = 'male' | 'female' | 'other' | null;

export interface User {
  id: number;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  birthday?: Date;
  gender?: Gender;
}

export interface PatchProfileParams {
  gender?: Gender;
  birthday?: Date;
  lastName?: string;
  firstName?: string;
}

export interface ChangePasswordParams {
  password: string;
}

export interface RegistrationParams {
  username: string;
  password: string;
}
export interface LoginParams {
  username: string;
  password: string;
}
