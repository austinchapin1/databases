CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username CHAR(20),
  PRIMARY KEY (id)
);


CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  usersID INT,
  messageText CHAR(255),
  rooms CHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (usersID) REFERENCES users(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

