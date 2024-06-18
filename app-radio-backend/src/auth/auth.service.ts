import { Injectable, UnauthorizedException } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UsersRepository } from 'src/users/users.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { error } from 'console';
import { JwtPayload } from './jwt-payload.interfaces';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
        private userRepository: UsersRepository
    ){}

    async singIn(authCredential: AuthCredentialDto): Promise<any> {
        const result = await this.userRepository.validateUserPassword(authCredential);

        if(!result){
            throw new UnauthorizedException('¡Credenciales Invalidas!');
        }
        const payload: JwtPayload = {usuario: result};
        const accesToken = this.jwtService.sign(payload)
        return {accesToken}
    }


    async signUp(authCredential: AuthCredentialDto){
        return await this.userRepository.signUp(authCredential);
    } 
}
