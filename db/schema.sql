DROP DATABASE IF EXISTS eidendale;
CREATE DATABASE eidendale;

USE eidendale;


DROP TABLE IF EXISTS `login_info`;
CREATE TABLE login_info (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `pending_login_info`;
CREATE TABLE pending_login_info (
  id INTEGER NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `pendingUsers`;
CREATE TABLE pendingUsers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  login_id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  display_name VARCHAR(30),
  avatar VARCHAR(700),
  title VARCHAR(30),
  profileID int(10),
  robeID int(10),
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  login_id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  display_name VARCHAR(30),
  avatar VARCHAR(700),
  rank VARCHAR(30),
  profileID int(10),
  robeID int(10),
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `messages`;
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

DROP TABLE IF EXISTS `view_profile`;
CREATE TABLE view_profile (
   profileID int(10) NOT NULL,
   profilePicture varchar(3000),
   nickNames varchar(200),
   age varchar(20),
   playby varchar(50),
   description varchar(5000),
   connections varchar(6000),
   color varchar(2000),
   PRIMARY KEY(profileID)
 );

DROP TABLE IF EXISTS `view_robes`;
CREATE TABLE view_robes (
  robeID int(10) NOT NULL,
  robeLink varchar(3000) NOT NULL,
  color varchar(10) DEFAULT NULL,
  PRIMARY KEY(robeID)
);

DROP TABLE if EXISTS `noticeboard`;
CREATE TABLE noticeboard (
  noticeboardID int not null primary key auto_increment,
  title varchar (150),
  timeCreated VARCHAR(300),
  noticeboardBody VARCHAR(3000),
  author varchar (150)
);

