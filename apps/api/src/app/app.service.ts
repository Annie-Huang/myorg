import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

// interface Todo {
//   title: string;
// }

// Services in Nest are responsible for the business logic
@Injectable()
export class AppService {
  // getData(): { message: string } {
  //   return { message: 'Welcome to api!' };
  // }

  todos: Todo[] = [{ title: 'Todo 1 From API' }, { title: 'Todo 2 From API' }];

  getData(): Todo[] {
    return this.todos;
  }

  // This will never be used as it's only stay in API and not return any value.
  addTodo() {
    this.todos.push({
      title: `New todo From API ${Math.floor(Math.random() * 1000)}`
    });
  }
}
