import { ConflictException, Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { DataSource, Repository } from 'typeorm';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
    constructor(private dataSource: DataSource){
        super(UsersEntity, dataSource.createEntityManager());
    }

    async signUp(credentialDto: AuthCredentialDto ): Promise<void>{
        try {
            const {user, password} = credentialDto
            const newUser = new UsersEntity();
            newUser.username = user
            newUser.salt = await bcrypt.genSalt();;
            newUser.password = await this.hashPassword(password, newUser.salt );
            await newUser.save();
        } catch (error) {
            //console.log(error)
            if(error.code === 'ER_DUP_ENTRY' || error.code === 1062){
                throw new ConflictException('Usuario ya existe! ');
            }else{
                throw new ConflictException(error.detail);
            }
        }
    }

    
    private async hashPassword(password: string, salt: string): Promise<string>{
        return await bcrypt.hash(password, salt);
    }

    
    public async validateUserPassword(credentialDto: AuthCredentialDto):Promise<string>{
        const {user, password} = credentialDto;
        const findUser = await this.findOneBy({username: user});
        if(user && findUser.validatePassword(password)){
            return findUser.username;
        }else{
            return null;
        }
 
    }
}
