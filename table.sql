CREATE DATABASE medicinedb;

USE medicinedb;

CREATE TABLE medicine (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  uses TEXT,
  mechanism TEXT,
  side_effects TEXT
);

CREATE TABLE alternatives (
  id INT AUTO_INCREMENT PRIMARY KEY,
  medicine_id INT,
  name VARCHAR(255),
  salt_content VARCHAR(255),
  price DECIMAL(10,2),
  FOREIGN KEY (medicine_id) REFERENCES medicine(id)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  medicine_id INT,
  rating INT,
  content TEXT,
  FOREIGN KEY (medicine_id) REFERENCES medicine(id)
);
