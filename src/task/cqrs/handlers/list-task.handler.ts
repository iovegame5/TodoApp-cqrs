import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { ListTaskQuery } from 'src/task/quries/list-task.query';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@QueryHandler(ListTaskQuery)
export class ListTaskHandler implements IQueryHandler<ListTaskQuery> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  execute(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
