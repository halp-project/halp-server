DROP DATABASE IF EXISTS halp;
CREATE DATABASE halp;

\c halp;

DROP TABLE IF EXISTS employed;
DROP TABLE IF EXISTS patient;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS plate;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS patientOrder;
DROP TABLE IF EXISTS copyBook;
DROP TABLE IF EXISTS copyItem;


CREATE TYPE employedType AS ENUM ('book', 'kiosk', 'food', 'assistant');
CREATE TYPE dishType AS ENUM ('starter', 'mainDish', 'dessert');
CREATE TYPE menuType AS ENUM ('breakfast', 'lunch', 'dinner');

CREATE TABLE employed (
  userName VARCHAR PRIMARY KEY,
  password VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  lastname VARCHAR NOT NULL,
  emal VARCHAR NOT NULL,
  type employedType NOT NULL
);


CREATE TABLE patient (
  userName VARCHAR PRIMARY KEY,
  password VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  lastname VARCHAR NOT NULL,
  description VARCHAR
);

CREATE TABLE book (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  author VARCHAR,
  description VARCHAR NOT NULL,
  image VARCHAR NOT NULL
);


CREATE TABLE plate (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  image VARCHAR NOT NULL,
  typ dishType NOT NULL
);


CREATE TABLE menu (
  ID SERIAL PRIMARY KEY,
  menuDate DATE NOT NULL,
  type menuType NOT NULL,
  UNIQUE (menuDate, type)
);


CREATE TABLE item (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  image VARCHAR NOT NULL,
  price INTEGER NOT NULL
);


CREATE TABLE patientOrder (
  ID INTEGER PRIMARY KEY,
  orderDate TIMESTAMP NOT NULL,
  idPatient VARCHAR REFERENCES patient(userName)
);


CREATE TABLE copyBook (
  referenceNumber VARCHAR PRIMARY KEY,
  idBook INTEGER REFERENCES book(ID)
);


CREATE TABLE copyItem (
  referenceNumber VARCHAR PRIMARY KEY,
  idItem INTEGER REFERENCES item(ID)
);


CREATE TABLE lending (
  ID INTEGER PRIMARY KEY REFERENCES patientOrder(ID),
  referenceNumber VARCHAR REFERENCES copyBook(referenceNumber)
); 


CREATE TABLE purchase (
  ID INTEGER PRIMARY KEY REFERENCES patientOrder(ID),
  referenceNumber VARCHAR REFERENCES copyItem(referenceNumber)
);


CREATE TABLE menuChoice (
  ID INTEGER PRIMARY KEY REFERENCES patientOrder(ID),
  idStarter INTEGER REFERENCES plate(ID) NOT NULL,
  idMainDish INTEGER REFERENCES plate(ID) NOT NULL,
  idDessert INTEGER REFERENCES plate(ID) NOT NULL
);

CREATE TABLE dishInMenu (
  idPlate INTEGER REFERENCES plate(ID),
  idMenu INTEGER REFERENCES menu(ID),
  PRIMARY KEY(idPlate, idMenu)
);