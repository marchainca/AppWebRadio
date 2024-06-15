import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
