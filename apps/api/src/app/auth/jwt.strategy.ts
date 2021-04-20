import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret
    });
  }

  async validate(payload: any) {
    if(Date.now() / 1000 >= payload.exp) {
      throw new UnauthorizedException({type: 'expired'})
    }
    return { id : payload.sub, username: payload.username };
  }
}
