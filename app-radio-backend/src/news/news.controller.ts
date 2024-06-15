import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('api/v1/news')
export class NewsController {
    constructor(private newsService: NewsService){}
    @Get()
    findAll(){
        return this.newsService.findAll()
    }

    @Post()
    create(@Body() newsItem){
        return this.newsService.create(newsItem);
        
    }

}
