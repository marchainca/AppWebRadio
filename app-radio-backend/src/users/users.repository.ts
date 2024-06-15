import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
    constructor(
        private dataSource: DataSource        
    ){
        super(UsersEntity, dataSource.createEntityManager());
    }
    /* async findOne(): Promise<UsersEntity | undefined>{
        //return 'this.'
    } */
}
