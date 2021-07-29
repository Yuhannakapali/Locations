import { Controller, Get, Render } from '@nestjs/common';
import { MappingRegistryService } from 'src/common/mapping-registry.service';
import { LocationList } from './location-list.dto';
import { locationDto } from './location.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationList> {
    const locations = await this.locationService.list();
    const dtos = locations.map((location) =>
      this.mappingRegistryService.map<locationDto>(
        Location.name,
        locationDto.name,
        location,
      ),
    );

    return { locations: dtos };
  }
}
