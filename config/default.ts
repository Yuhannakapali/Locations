import { resolve } from "path";

// const SOURCE_PATH = resolve(__dirname, "..", "src");

export default {
  database: {
    url: "postgres://app:secret@arriana-postgresql/locations",
    host: "arriana-postgresql",
    port: 5432,
  },
  orm: {
    entities: [`*/src/**/*.entity{.ts,.js}`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname, "..", "public"),
  },
  templates: {
    path: resolve(__dirname, "..", "views"),
  },
};
