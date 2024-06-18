import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt , Strategy} from "passport-jwt";
import { UsersEntity } from "src/users/users.entity";
import { jwtConstants } from "./constantes";
import { UsersRepository } from "src/users/users.repository";
import { JwtPayload } from "./jwt-payload.interfaces";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private usersRepository: UsersRepository){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
          });
    }

    async validate(payload: JwtPayload): Promise<UsersEntity>{
        const { usuario } = payload;
        const user = await this.usersRepository.findOne({ where : { username: usuario } });

        return user;
    }
}