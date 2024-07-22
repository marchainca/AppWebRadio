import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './news.entity';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { SocialMediaPostsService } from 'src/socials/social-media-posts.service';
import { HttpModule } from '@nestjs/axios';
import { HttpCustomServiceService } from './httpService/http-custom-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    AuthModule,
    HttpModule,
  ],
  providers: [NewsService, SocialMediaPostsService, SocialMediaPostsService, HttpCustomServiceService],
  controllers: [NewsController]
})
export class NewsModule {}
