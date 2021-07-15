import { Injectable } from '@nestjs/common';
import { ILocationList } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  listLocation(): ILocationList {
    
    return {
      locations: ['location 1', 'location 2', 'location 3']
    };
  }
}
