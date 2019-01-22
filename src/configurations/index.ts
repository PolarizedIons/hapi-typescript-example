

import * as nconf from "nconf";
import * as path from "path";

// So that tsc will copy these files to the build dir
import * as _ from "./config.dev.json";
import * as __ from "./config.test.json";

//Read Configurations
const configs = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: "file",
    file: path.join(__dirname, `./config.${process.env.NODE_ENV || "dev"}.json`)
  }
});

export interface IServerConfigurations {
  port: number;
  plugins: Array<string>;
  jwtSecret: string;
  jwtExpiration: string;
  routePrefix: string;
}

export interface IDataConfiguration {
  connectionString: string;
}

export function getDatabaseConfig(): IDataConfiguration {
  return configs.get("database");
}

export function getServerConfigs(): IServerConfigurations {
  return configs.get("server");
}
