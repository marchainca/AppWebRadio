import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-facebook";
import { AuthService } from "./auth.service";
import { env } from "process";
import { FcbkConstants } from "./constantes";

export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(private authService: AuthService){
        super({
            clientID: FcbkConstants.FACEBOOK_APP_ID, // El ID de la aplicación de Facebook
            clientSecret: FcbkConstants.FACEBOOK_APP_SECRET, // El secreto de la aplicación de Facebook
            callbackURL: 'http://localhost:3000/auth/facebook/callback', // La URL de redirección después de la autenticación
            profileFields: ['id', 'name', 'email', 'photos'], // Campos del perfil de Facebook que se solicitarán

        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: Function){
        try {
            const {id, name, emails, photos}  = profile
            const user = {
                facebookId: id,
                email: emails[0].value,
                firstName: name.givenName,
                lastName: name.familyName,
                picture: photos[0].value,                 
            };
            // Evaluar si es necesario guardar el usuario en la base de datos 
            const payload = {
                user,
                accessToken
            };
            done(null, payload)
        } catch (error) {
            done(error, false)
        }
    }
}
