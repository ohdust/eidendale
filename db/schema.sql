DROP DATABASE IF EXISTS eiden_db;

CREATE DATABASE eiden_db;

USE eiden_db;

CREATE TABLE login_info (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

CREATE TABLE pending_login_info (
  id INTEGER NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

CREATE TABLE pendingUsers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  login_id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  display_name VARCHAR(30),
  avatar_dirct VARCHAR(30),
  title VARCHAR(30),
  profileID int(10),
  robeID int(10),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  login_id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  display_name VARCHAR(30),
  avatar_dirct VARCHAR(30),
  title VARCHAR(30),
  profileID int(10),
  robeID int(10),
  PRIMARY KEY(id)
);

CREATE TABLE chatHistoryRoom(
  id INTEGER AUTO_INCREMENT NOT NULL,
  login_id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  display_name VARCHAR(30),
  avatar_dirct VARCHAR(30),
  title VARCHAR(30),
  profileID int(10),
  robeID int(10),
  primary KEY(id)
);

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  room_id INTEGER NOT NULL,
  message_body VARCHAR(300),
  time_sent VARCHAR(300),
  PRIMARY KEY(id)
);

create TABLE messages_mainChat (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  room_id INTEGER NOT NULL,
  message_body VARCHAR(300),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT NOT NULL,
  room_name VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE view_profilepics (
  profileID int(10) NOT NULL,
  profileLink varchar(3000) NOT NULL,
  PRIMARY KEY(profileID)
);

CREATE TABLE view_avatars (
  avatarID int(10) NOT NULL,
  avatarLink varchar(3000) NOT NULL,
  PRIMARY KEY(avatarID)
);

CREATE TABLE view_robes (
  robeID int(10) NOT NULL,
  robeLink varchar(3000) NOT NULL,
  color varchar(10) DEFAULT NULL,
  PRIMARY KEY(robeID)
);
