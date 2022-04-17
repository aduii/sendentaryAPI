import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "db_a84940_dbsedentaryapp_admin",
  dbPassword: process.env.DB_PASSWORD || "R123Calle@",
  dbServer: process.env.DB_SERVER || "SQL5107.site4now.net",
  dbDatabase: process.env.DB_DATABASE || "db_a84940_dbsedentaryapp",
};
