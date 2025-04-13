import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { CreateTaskCommand } from '../commands/create-task.command';
import { Task } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  execute(command: CreateTaskCommand): Promise<Task> {
    const { description } = command;
    return this.taskRepository.save({ description });
  }
}
