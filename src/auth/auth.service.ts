import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email);

    if (user && user.password === password) {
      return user;
    }
    return "User or password doesn't match";
  }

  async login(user: any) {
    const payload = { email: user.email, userId: user.Id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
