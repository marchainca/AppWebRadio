import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsEntity } from './news.entity';
import { NewsDto } from './dto/news.dto';
import { AuthGuard } from '@nestjs/passport';
import { SocialMediaPostsService } from 'src/socials/social-media-posts.service';

@Controller('api/v1/news')
export class NewsController {

    constructor(private newsService: NewsService,
        private socialMediaPostsService: SocialMediaPostsService,
    ){}

    @Get('/')
    @UseGuards(AuthGuard())
    async findAll(): Promise<NewsEntity[]>{
        try {
            return await this.newsService.findAll()
        } catch (error) {
            throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: `Error in route 'api/v1/news/'`,
            }, HttpStatus.FORBIDDEN, {
            cause: error
            });  
        }
        
    }

    @Post('/create/')
    @UseGuards(AuthGuard())
    create(@Body(ValidationPipe) newsItem: NewsDto): Promise<NewsEntity>{
        try {
            console.log(newsItem)
            return this.newsService.create(newsItem);
        } catch (error) {
            throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: `Error in route 'api/v1/news/create'`,
            }, HttpStatus.FORBIDDEN, {
            cause: error
            });  
        }
    }

    @Get('/findNews/:id')
    @UseGuards(AuthGuard())
    async findOne(@Param('id') id: string ): Promise<NewsEntity>{
        try {
            return await this.newsService.findOne(parseInt(id))
        } catch (error) {
            throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: `Error in route 'api/v1/news/findNews'`,
            }, HttpStatus.FORBIDDEN, {
            cause: error
            });  
        }
    }

    @Put('/updateNews/')
    @UseGuards(AuthGuard())
    async update(@Body() payload: Partial<NewsDto>): Promise<NewsEntity>{
        try {
            return await this.newsService.update(payload)
        } catch (error) {
            throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: `Error in route 'api/v1/news/updateNews'`,
            }, HttpStatus.FORBIDDEN, {
            cause: error
            });
        }
    }

    @Post('/publishingFcbk')
    @UseGuards(AuthGuard())
    async facebookPost(@Body() payload: object ):Promise<object>{
        try {
            return await this.socialMediaPostsService.publishPostFcbk(payload)
        } catch (error) {
            throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: `Error in route 'api/v1/news/publishingFcbk'`,
            }, HttpStatus.FORBIDDEN, {
            cause: error
            });
        }
    }




}
