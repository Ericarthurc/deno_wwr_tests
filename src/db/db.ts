import { PostgresClient, envConfig } from "../../deps.ts";

envConfig({ export: true });

export const dbConfig = {
  user: Deno.env.get("DB_USER"),
  database: Deno.env.get("DB_DATABASE"),
  hostname: Deno.env.get("DB_HOST"),
  port: Deno.env.get("DB_PORT"),
  password: Deno.env.get("DB_PASSWORD"),
};

export const dbClient = new PostgresClient(dbConfig);

// const data = await Deno.readTextFile("./database.sql");
await dbClient.queryArray(`
CREATE TABLE IF NOT EXISTS SERVICES (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    time TIMESTAMPTZ NOT NULL,
    seats INTEGER NOT NULL
)`);

await dbClient.queryArray(`
CREATE TABLE IF NOT EXISTS USERS (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    userseats INTEGER NOT NULL CHECK (userSeats >= 1 AND userSeats <= 10),
    servicetime TIMESTAMPTZ NOT NULL,
    serviceid TEXT NOT NULL
)`);

await dbClient.queryArray(`SET timezone = 'America/Los_Angeles'`);
