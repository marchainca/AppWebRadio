import { UsersEntity } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('news')
export class NewsEntity {
    
    @PrimaryGeneratedColumn()
    idnews: number;

    @Column()
    idusers: number;

    @Column()
    section: string;

    @Column()
    headline: string;

    @Column()
    drophead: string;

    @Column()
    byline: string;

    @Column()
    date: Date;

    @Column()
    body: string;

    @Column()
    photo: string;

    @Column()
    caption: string;

    @Column()
    role: string

    @Column()
    createdAt: Date;

    @Column({default: new Date()})
    updateAt: Date;


    /* @ManyToOne((type)=> UsersEntity, (news)=> news.news, {eager: true})
    user: UsersEntity[]; */


}
