import { Injectable } from '@nestjs/common';
import { Todo } from '@node-org/data';

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
];

@Injectable()
export class TodosService {
  getTodos(): Todo[] {
    return todos;
  }
}
