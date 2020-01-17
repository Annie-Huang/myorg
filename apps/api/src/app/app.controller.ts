import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

// Controllers are responsible for implementing Http endpoints.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getData() {
  //   return this.appService.getData();
  // }

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}
