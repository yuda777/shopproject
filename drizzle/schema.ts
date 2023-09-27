import { pgTable, pgEnum, serial, varchar, json, timestamp, text, integer, uniqueIndex, foreignKey } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const popularity = pgEnum("popularity", ['popular', 'known', 'unknown'])
export const category = pgEnum("category", ['accessories', 'shoes', 'clothing', 'skateboards'])


export const carts = pgTable("carts", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("userId", { length: 191 }),
	paymentIntentId: varchar("paymentIntentId", { length: 191 }),
	clientSecret: varchar("clientSecret", { length: 191 }),
	items: json("items").default(null),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
});

export const post = pgTable("post", {
	id: serial("id").primaryKey().notNull(),
	title: text("title"),
	likes: integer("likes"),
	userId: integer("userId"),
});

export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }),
});

export const countries = pgTable("countries", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
},
(table) => {
	return {
		nameIdx: uniqueIndex("name_idx").on(table.name),
	}
});

export const cities = pgTable("cities", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	countryId: integer("country_id").references(() => countries.id),
	popularity: popularity("popularity"),
});

export const userT = pgTable("user_t", {
	id: serial("id").primaryKey().notNull(),
	fullname: varchar("fullname", { length: 100 }),
	parentId: integer("parent_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
},
(table) => {
	return {
		userTParentIdUserTIdFk: foreignKey({
			columns: [table.parentId],
			foreignColumns: [table.id]
		}),
	}
});

export const stores = pgTable("stores", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	name: varchar("name", { length: 191 }).notNull(),
	description: text("description"),
	slug: text("slug"),
});

export const products2 = pgTable("products2", {
	images: json("images"),
});

export const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 191 }).notNull(),
	description: text("description"),
	images: json("images"),
	category: category("category").default('skateboards').notNull(),
	subcategory: varchar("subcategory", { length: 191 }).notNull(),
	tags: json("tags"),
	price: integer("price").default(0).notNull(),
	quantity: integer("quantity").default(1).notNull(),
	inventory: integer("inventory").default(1).notNull(),
	rating: integer("rating").default(0).notNull(),
	storeId: integer("storeId").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
});