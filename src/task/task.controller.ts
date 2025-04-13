import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './cqrs/commands/create-task.command';
import { ListTaskQuery } from './quries/list-task.query';
import { Task } from './cqrs/entities/task.entity';
import { ListByIdTaskQuery } from './quries/list-by-id-task.query';
import { UpdateByCompletedCommand } from './cqrs/commands/update-by-completed.command';
import { DeleteTaskCommand } from './cqrs/commands/delete-task.command';

@Controller('task')
export class TaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Post()
  async create(@Body('description') description: string): Promise<void> {
    return this.commandBus.execute(new CreateTaskCommand(description));
  }
  @Get()
  async find(): Promise<Task[]> {
    return this.queryBus.execute(new ListTaskQuery());
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<Task> {
    return this.queryBus.execute(new ListByIdTaskQuery(id));
  }

  @Patch(':id/completed/:completed')
  async updateByCompleted(
    @Param('id') id: number,
    @Param('completed') completed: string,
  ): Promise<void> {
    const completeBool = completed === 'true';
    return this.commandBus.execute(
      new UpdateByCompletedCommand(id, completeBool),
    );
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
