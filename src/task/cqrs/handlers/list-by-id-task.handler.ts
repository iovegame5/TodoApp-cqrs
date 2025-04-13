import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { ListByIdTaskQuery } from 'src/task/quries/list-by-id-task.query';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';

@QueryHandler(ListByIdTaskQuery)
export class ListByIdTsakHandler implements IQueryHandler<ListByIdTaskQuery> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  async execute(query: ListByIdTaskQuery): Promise<Task> {
    const { id } = query;
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }

    return task;
  }
}
