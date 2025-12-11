# Create database script for health

# Create the database
CREATE DATABASE IF NOT EXISTS health;
USE health ;

# Create the tables
CREATE TABLE IF NOT EXISTS users (
    id     INT AUTO_INCREMENT,
    first_name   CHAR(50),
    last_name    CHAR(50),
    email        CHAR(255),
    password     VARCHAR(60),
    username     CHAR(30),
    PRIMARY KEY(id));

# Create equipment table
CREATE TABLE IF NOT EXISTS equipment (
    id     INT AUTO_INCREMENT,
    name   CHAR(60),
    PRIMARY KEY(id));

# Create booking table
CREATE TABLE IF NOT EXISTS booking (
    id     INT AUTO_INCREMENT,
    username     CHAR(60),
    equipment_name   CHAR(60),
    time        CHAR(60),
    booking_date DATE,
    PRIMARY KEY(id));


