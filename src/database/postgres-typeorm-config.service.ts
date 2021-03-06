import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "../config/config.service";

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      // url: this.configService.get<string>('database.url'),
      host: this.configService.get<string>("database.host"),
      port: this.configService.get<number>("database.port"),
      entities: this.configService.get<string[]>("orm.entities"),
      synchronize: this.configService.get<boolean>("orm.synchronize"),
    };
  }
}
