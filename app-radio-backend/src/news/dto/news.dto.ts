import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NewsDto {
    @IsNotEmpty()
    idnews: number;

    @IsNotEmpty()
    @IsNumber()
    idusers: number

    @IsNotEmpty()
    @IsString()
    section: string;

    @IsNotEmpty()
    @IsString()
    headline: string;

    @IsNotEmpty()
    @IsString()
    drophead: string;

    @IsNotEmpty()
    @IsString()
    byline: string;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsString()
    body: string;

    @IsNotEmpty()
    @IsString()
    photo: string;

    @IsNotEmpty()
    @IsString()
    caption: string;

    @IsNotEmpty()
    @IsString()
    role: string

    @IsNotEmpty()
    @IsBoolean()
    isActivate: Boolean
}
