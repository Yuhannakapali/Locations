import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
export interface ILocationList {
    locations: string[];
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/list")
  @Render('list.hbs')
  getLocation():ILocationList  {
    return this.appService.listLocation();
  }
}
