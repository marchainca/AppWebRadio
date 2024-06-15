import { Column, PrimaryColumn } from "typeorm";

export class NewsEntity {
    
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createdAt: Date;

    @Column({default: new Date()})
    updateAt: Date;


}
