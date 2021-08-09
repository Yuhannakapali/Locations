import { Controller, Get, Render } from "@nestjs/common";
import { MappingRegistryService } from "../common/mapping-registry.service";
// import { LocationList } from "./location-list.dto";
import { locationDto } from "./location.dto";
// import { Location } from "./location.entity";
import { LocationService } from "./location.service";

@Controller("location")
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get()
  @Render("list.hbs")
  public async listLocations() {
    const locations = await this.locationService.list();
    const dtos = locations.map((location) => {
      console.log("name", location.name);
      // locationDto.name
      console.log(
        "🚀 ~ file: location.controller.ts ~ line 42 ~ LocationController ~ dtos ~ locationDto.name",
        locationDto.name,
      );
      this.mappingRegistryService.map<locationDto>(
        location.name,
        locationDto.name,
        location,
      );
    });

    return { locations: dtos };
  }
}
