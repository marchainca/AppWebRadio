import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './news.entity';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    AuthModule
  ],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
