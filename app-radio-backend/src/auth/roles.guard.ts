import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './role.enum';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector){};

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        // Obtener los roles requeridos para la ruta actual
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])

        // Si no hay roles requeridos, permitir acceso
        if (!requiredRoles) {
            return true;
        }

        // Obtener el usuario de la solicitud HTTP
        const {user} = context.switchToHttp().getRequest();
        return requiredRoles.some((role)=> user.role?.includes(role));
    }
}