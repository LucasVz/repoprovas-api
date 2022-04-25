CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL
);

CREATE TABLE "categories" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "tests" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"pdfUrl" TEXT NOT NULL,
	"categoryId" INTEGER NOT NULL,
	"teacherDisciplineId" INTEGER NOT NULL
);

CREATE TABLE "teachersDisciplines" (
	"id" SERIAL PRIMARY KEY,
	"teacherId" INTEGER NOT NULL,
	"disciplineId" INTEGER NOT NULL
);

CREATE TABLE "teachers" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "disciplines" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	"termId" INTEGER NOT NULL
);


CREATE TABLE "terms" (
	"id" SERIAL PRIMARY KEY,
	"number" INTEGER NOT NULL UNIQUE
);

