import { Injectable } from '@nestjs/common';
import { User } from '@simple-profile/api-interfaces';

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

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

}
