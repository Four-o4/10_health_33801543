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

CREATE USER IF NOT EXISTS 'health_app'@'localhost' IDENTIFIED BY 'qwertyuiop';
GRANT ALL PRIVILEGES ON health.* TO 'health_app'@'localhost';
FLUSH PRIVILEGES;
