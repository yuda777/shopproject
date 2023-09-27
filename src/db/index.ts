import { drizzle } from "drizzle-orm/postgres-js";
import { carts, products, stores } from "@/db/schema";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, { max: 1 });
export const db = drizzle(sql, { schema: { carts, products, stores } });
// export const db = drizzle(sql);
