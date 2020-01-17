import { Injectable } from '@nestjs/common';

interface Todo {
  title: string;
}

// Services in Nest are responsible for the business logic
@Injectable()
export class AppService {
  // getData(): { message: string } {
  //   return { message: 'Welcome to api!' };
  // }

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
