import { Controller, Get, Render } from '@nestjs/common';
import { ILocationList } from 'src/app.controller';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocation(): ILocationList {
    const locations = this.locationService.list();
    return {
      locations,
    };
  }
}
