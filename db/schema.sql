CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers(
    id INT NOT NULL auto_increment,
    name VARCHAR(75) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);