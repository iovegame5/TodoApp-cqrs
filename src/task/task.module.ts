import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './cqrs/entities/task.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskController } from './task.controller';
import { CreateTaskHandler } from './cqrs/handlers/create-task.handdler';
import { DeleteTaskHandler } from './cqrs/handlers/delete-task.handdler';
import { ListTaskHandler } from './cqrs/handlers/list-task.handler';
import { ListByIdTsakHandler } from './cqrs/handlers/list-by-id-task.handler';
import { UpdateByCompletedHandler } from './cqrs/handlers/update-by-completed.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), CqrsModule],
  controllers: [TaskController],
  providers: [
    CreateTaskHandler,
    DeleteTaskHandler,
    ListTaskHandler,
    ListByIdTsakHandler,
    UpdateByCompletedHandler,
  ],
})
export class TaskModule {}
