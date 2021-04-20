export interface User {
  id: number;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  birthday?: Date;
  gender?: 'male' | 'female' | 'other' | null;
}
