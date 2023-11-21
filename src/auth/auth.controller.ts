import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  authService: AuthService;

  constructor(authService: AuthService) {
    //this.authService = authService;
  }

  @Post('/local/signup'): Promise<Tokens>
  signupLocal(@Body() dto: AuthDto) {
    this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  signinLocal() {
    this.authService.signinLocal();
  }

  @Post('/local/logout')
  logout() {
    this.authService.logout();
  }

  @Post('/local/refresh')
  refreshTokens() {
    this.authService.refreshTokens();
  }

}
