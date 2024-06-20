import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { NewsEntity } from "src/news/news.entity";

@Entity('users')
export class UsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idusers: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    salt: string;

    @Column()
    createdAt: Date;

    @Column({default: new Date()})
    updateAt: Date;

    /* @ManyToOne(type => NewsEntity, news => news.idusers )
    news: NewsEntity[]; */

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;        
    }
}
