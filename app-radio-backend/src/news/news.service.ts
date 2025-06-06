import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './news.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
    constructor( 
        @InjectRepository(NewsEntity)
        private newsRepository: Repository<NewsEntity>
    ){}

    async create(newNews: Partial<NewsEntity> ): Promise<NewsEntity>{
        try {
            const create = this.newsRepository.create(newNews);
            return await this.newsRepository.save(create);
        } catch (error) {
            throw error;
        }
        
    }

    async findAll(): Promise<NewsEntity[]>{
        try {
            return await this.newsRepository.find();
        } catch (error) {
            throw error;
        }
        
    }

    async findOne(idnews: number): Promise<NewsEntity>{
        try {
            return await this.newsRepository.findOne({where: {idnews}});
        } catch (error) {
            throw error;
        }
    }

    async update(news: Partial<NewsEntity>): Promise<NewsEntity>{
        try {
            const idnews = news.idnews
            const update = await this.newsRepository.update(idnews, news)
            return await this.findOne(idnews);
        } catch (error) {
            throw error;
        }
    }

    async inactivate(idnews: number): Promise<Boolean>{
        try {
            const inactivate = await this.newsRepository.update(idnews, {isActivate: false})
            return true
        } catch (error) {
            throw error
        }
    }

    
}
