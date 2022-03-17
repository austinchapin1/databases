CREATE DATABASE chat;

USE chat;

CREATE TABLE messageList (
  id int PRIMARY KEY,
  users int,
  messages char(255),
  rooms int,
  FOREIGN KEY (users) REFERENCES userNames(id),
  FOREIGN KEY (rooms) REFERENCES chatRooms(id)
);

CREATE TABLE chatRooms (
  id int PRIMARY KEY,
  rooms char(20)
);


CREATE TABLE userNames (
  id int PRIMARY KEY,
  users char(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

