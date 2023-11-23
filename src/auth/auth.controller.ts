import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types/tokens.type';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    //this.authService = authService;
  }

  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
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
