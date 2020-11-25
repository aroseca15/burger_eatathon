CREATE DATABASE burgers_Db;

USE burgers_Db;


CREATE TABLE burgers(
    id INT NOT NULL auto_increment,
    name VARCHAR(75) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);