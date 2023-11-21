import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';
import { ConfigModule } from '@nestjs/config';
import tokensConfig from '../../config/tokensConfiguration';

@Module({
  imports: [ConfigModule.forFeature(tokensConfig), JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule { }
