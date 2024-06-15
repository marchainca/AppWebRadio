import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class UsersEntity extends BaseEntity {
    @PrimaryColumn()
    iduser: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({default: new Date()})
    updateAt: Date;
}
