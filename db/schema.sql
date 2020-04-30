/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.


*/

-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS sequelizedBurgers_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE sequelizedBurgers_db;

USE sequelizedBurgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
  burger_name varchar
  (255) NOT NULL,
  devoured boolean,
  PRIMARY KEY
  (id)
);

  -- Insert a set of records.
  -- INSERT INTO movies (movie) VALUES ('get a hug from my wife.');
  -- INSERT INTO movies (movie) VALUES ('get travelling.');
  -- INSERT INTO movies (movie) VALUES ('get a hug from my daughter.');
  SELECT *
  FROM burgers;
