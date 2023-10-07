CREATE DATABASE knights_hack;

USE knights_hack;

CREATE TABLE users (
    user_id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE current_location (
    location_id INTEGER AUTO_INCREMENT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    PRIMARY KEY(location_id)
);

CREATE TABLE normal_user (
    n_user_id INTEGER AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    PRIMARY KEY(n_user_id),
    FOREIGN KEY(user_id) REFERENCES user(user_id)
);

CREATE TABLE ambulance_user (
    a_user_id INTEGER AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    location_id INTEGER NOT NULL,
    PRIMARY KEY(a_user_id),
    FOREIGN KEY(user_id) REFERENCES user(user_id),
    FOREIGN KEY(location_id) REFERENCES current_location(location_id)
);

CREATE TABLE requests (
    r_user_id INTEGER AUTO_INCREMENT,
    n_user_id INTEGER NOT NULL,
    location_id INTEGER NOT NULL,
    a_user_id INTEGER,
    PRIMARY KEY(r_user_id),
    FOREIGN KEY(n_user_id) REFERENCES normal_user(n_user_id),
    FOREIGN KEY(a_user_id) REFERENCES ambulance_user(a_user_id),
    FOREIGN KEY(location_id) REFERENCES current_location(location_id)
);