import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(private configService: ConfigService, private prisma: PrismaService, private jwtService: JwtService) { }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('tokens.accessToken.salt'),
          expiresIn: this.configService.get<string>(
            'tokens.accessToken.expiresIn',
          ),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('tokens.refreshToken.salt'),
          expiresIn: this.configService.get<string>(
            'tokens.refreshToken.expiresIn',
          ),
        },
      ),
    ]);
  }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password)
    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
  }
  signinLocal() { }
  logout() { }
  refreshTokens() { }

}
