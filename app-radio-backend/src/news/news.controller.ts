import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsEntity } from './news.entity';
import { NewsDto } from './dto/news.dto';

@Controller('api/v1/news')
export class NewsController {

    constructor(private newsService: NewsService){}

    @Get('/')
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
    create(@Body() newsItem): Promise<NewsEntity>{
        try {
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




}
