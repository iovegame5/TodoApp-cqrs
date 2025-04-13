import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/cqrs/entities/task.entity';

@Module({
  imports: [
    CqrsModule.forRoot(),
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.sqlite',
      synchronize: true,
      entities: [Task],
    }),
  ],
})
export class AppModule {}
