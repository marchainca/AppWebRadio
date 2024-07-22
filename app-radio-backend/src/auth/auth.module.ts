import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constantes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({secret: jwtConstants.secret, signOptions: {expiresIn: 3600}})
  ],
  providers: [AuthService, JwtStrategy, FacebookStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy, PassportModule], 
})
export class AuthModule {}
