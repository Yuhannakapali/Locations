import "automapper-ts";
import { Injectable } from "@nestjs/common";
import { MappingService } from "./mapping.service";

@Injectable()
export class MappingRegistryService {
  private readonly mappingService: MappingService[] = [];
  public registerMappingService(mappingService: MappingService) {
    this.mappingService.push(mappingService);
    mappingService.addMapping();
  }
  public map<T>(source: string, target: string, object: any): T {
    console.log(
      "🚀 ~ file: mapping-registry.service.ts ~ line 13 ~ MappingRegistryService ~ object",
      object,
    );
    console.log(
      "🚀 ~ file: mapping-registry.service.ts ~ line 13 ~ MappingRegistryService ~ target",
      target,
    );
    console.log(
      "🚀 ~ file: mapping-registry.service.ts ~ line 13 ~ MappingRegistryService ~ source",
      source,
    );
    return automapper.map(source, target, object) as T;
  }
}
