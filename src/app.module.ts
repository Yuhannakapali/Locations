import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LocationModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
