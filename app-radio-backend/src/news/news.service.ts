import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    private news = [];

    findAll(){
        return this.news;
    }

    create(newsItem){
        this.news.push(newsItem);
    }
}
