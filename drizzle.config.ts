import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

export default {
	schema: "./src/db/schema.ts",
	driver: "pg",
	out: "./drizzle",
	dbCredentials: {
		connectionString: process.env.DATABASE_URL ?? "",
	},
	// breakpoints: true,
} satisfies Config;
