import  addJestHbsExtensions  from "jest-hbs-extension";
import { ConfigService } from "../src/config/config.service";
const config = new ConfigService;
const viewPath =  config.get<string>('template.path');

addJestHbsExtensions(viewPath);