import { Body, Controller, Get, Patch, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChangePasswordParams, PatchProfileParams } from '@simple-profile/api-interfaces';

@Controller('profile')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req) {
    return this.userService.findByUsername(req.user.username);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  patchProfile(@Request() req, @Body() body: PatchProfileParams) {
    return this.userService.patchById(req.user.id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('change-password')
  changePassword(@Request() req, @Body() body: ChangePasswordParams) {
    return this.userService.changePasswordById(req.user.id, body);
  }
}
