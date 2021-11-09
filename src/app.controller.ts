import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// /
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // root
  @Get()
  getHelloWorld(): string {
    return this.appService.getHello()
  }

  // /morning
  @Get('morning')
  getMorning(): string {
    return 'Goog morning everyone!'
  }

  // /hello
  @Get('hello')
  getHello(): string {
    return 'Hello everyone!'
  }

  // /evening
  @Get('evening')
  getEvening(): string {
    return 'Good evening everyone'
  }
}
