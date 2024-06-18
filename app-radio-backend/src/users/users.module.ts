import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersRepository],
  exports:[UsersRepository]
})
export class UsersModule {}
