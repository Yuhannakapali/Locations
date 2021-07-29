import { Injectable } from '@nestjs/common';
import { MappingService } from 'src/common/mapping.service';
import { locationDto } from './location.dto';
import { Location } from './location.entity';

@Injectable()
export class locationMappingService extends MappingService {
  public addMapping(): void {
    automapper.createMap(Location.name, locationDto.name);
  }
}
