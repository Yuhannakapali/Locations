import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { CommonModule } from 'src/common/common.module';
import { locationMappingService } from './location-mapping.service';

@Module({
  controllers: [LocationController],
  imports: [TypeOrmModule.forFeature([Location]), CommonModule],
  providers: [LocationService, locationMappingService],
})
export class LocationModule {}
