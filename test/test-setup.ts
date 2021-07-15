import  addJestHbsExtensions  from "jest-hbs-extension";
import  { join } from "path";

const viewPath =  join(__dirname, "..", "views");

addJestHbsExtensions(viewPath);