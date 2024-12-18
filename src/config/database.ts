import { env } from "@mongez/dotenv";
import type { DatabaseConfigurations } from "@warlock.js/cascade";

// const databaseConfigurations: DatabaseConfigurations = {
//   host: env("DB_HOST", "localhost"),
//   port: env("DB_PORT", 27017),
//   username: env("DB_USERNAME"),
//   password: env("DB_PASSWORD"),
//   database: env("DB_NAME"),
//   dbAuth: env("DB_AUTH"),
//   url: env("DB_URL"),
// };
const databaseConfigurations: DatabaseConfigurations = {
  url: "mongodb+srv://warlock:root@warlock.bovpn.mongodb.net/?retryWrites=true&w=majority&appName=warlock",
  database: "warlock",
};

export default databaseConfigurations;
   