import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateByCompletedCommand } from '../commands/update-by-completed.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateByCompletedCommand)
export class UpdateByCompletedHandler
  implements ICommandHandler<UpdateByCompletedCommand>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  async execute(command: UpdateByCompletedCommand): Promise<Task> {
    const { id, completed } = command;
    await this.taskRepository.update(id, { completed });
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }
}
