import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtToken } from './jwt-token.model';
import { UsersRepository } from 'src/users/users.repository';
import { AuthGuard } from '@nestjs/passport';

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

    @Get('facebook')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuth(@Req() req) {
        // Inicia la autenticación con Facebook
    }

    @Get('facebook/callback')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuthRedirect(@Req() req) {
        // Facebook redirige a esta URL después de la autenticación
        return {
        message: 'User information from Facebook',
        user: req.user,
        };
    }
}
