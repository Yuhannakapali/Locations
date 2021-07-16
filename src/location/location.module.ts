import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';

@Module({
  controllers: [LocationController],
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationService],
})
export class LocationModule {}
