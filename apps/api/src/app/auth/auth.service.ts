import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginParams, User } from '@simple-profile/api-interfaces';
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

  async registration(username: string, password: string) {
    const user = await this.usersService.createNewUser(username, password);
    const payload = { username: user.username, sub: user.id };
    console.log(this.usersService.getUsers());

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async login(params: LoginParams) {
    const user = await this.validateUser(params.username, params.password);
    console.log('finded',user);
    if (!user) {
      throw new UnauthorizedException({ type: 'wrong_data' });
    }
    const payload = { username: user.username, sub: user.id };
    console.log(this.usersService.getUsers());
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
