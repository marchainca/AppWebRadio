import { Body, Controller, Post, UnauthorizedException, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtToken } from './jwt-token.model';
import { UsersRepository } from 'src/users/users.repository';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService,
        private userRepository: UsersRepository
    ){} 

    @Post('/signup/')
    async signUp(@Body(ValidationPipe) credential: AuthCredentialDto): Promise<void>{
        return await this.authservice.signUp(credential);
    }

    @Post('/signin/')
    async signIn(@Body(ValidationPipe) credential: AuthCredentialDto): Promise<JwtToken>{
        return await this.authservice.singIn(credential);    
    }
}
