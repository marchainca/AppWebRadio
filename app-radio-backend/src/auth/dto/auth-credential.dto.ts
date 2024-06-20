import { IsString , IsNotEmpty, MinLength, MaxLength, Matches} from 'class-validator';

export class AuthCredentialDto{
    @IsNotEmpty()    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    user : string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?=(.*[!@#$%^&*()_+=.])+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ , { message: 'Password muy debil!' })
    password: string;

}