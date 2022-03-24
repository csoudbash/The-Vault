
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "folders" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT DEFAULT NULL,
    "folder_name" VARCHAR(100)
);

CREATE TABLE "accounts" (
	"id" SERIAL PRIMARY KEY,
	"account_description" VARCHAR(1000),
	"username" VARCHAR(1000),
	"password" VARCHAR(1000),
	"notes" VARCHAR(1000) DEFAULT NULL,
	"url" VARCHAR(1000) DEFAULT NULL,
	"folder_id" INT 
);
