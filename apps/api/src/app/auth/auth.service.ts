import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '@simple-profile/api-interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,     private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<User | undefined> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}