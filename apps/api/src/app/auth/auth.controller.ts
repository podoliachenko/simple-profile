import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginParams, RegistrationParams } from '@simple-profile/api-interfaces';


@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }


  @Post('login')
  async login(@Body() body: LoginParams) {
    return this.authService.login(body);
  }

  @Post('registration')
  async registration(@Body() body: RegistrationParams) {
    return this.authService.registration(body.username, body.password);
  }
}
