import { Injectable } from '@nestjs/common';
import { ChangePasswordParams, PatchProfileParams, User } from '@simple-profile/api-interfaces';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'admin',
      password: 'admin',
      firstName: 'Denis',
      id: 1
    }
  ];

  private lastId = 1;

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  getUsers(): User[] {
    return this.users;
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async patchById(id: number, params: PatchProfileParams): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.id === id);
    const user = this.users[userIndex];
    for (const key of Object.keys(params)) {
      user[key] = params[key];
    }
    return user;
  }

  async changePasswordById(id: number, { password }: ChangePasswordParams): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.id === id);
    const user = this.users[userIndex];
    user.password = password;
    return user;
  }

  async createNewUser(username: string, password: string): Promise<User | undefined> {
    const index = this.users.push({ username, password, id: this.newId() }) - 1;
    return this.users[index];
  }

  private newId(): number {
    return ++this.lastId;
  }
}
