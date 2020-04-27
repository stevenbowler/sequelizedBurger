/*
Still in the `db` folder, create a `seeds.sql` file. In this file, 
write insert queries to populate the `burgers` table with at least three entries.
*/

USE burgers_db;


-- Insert a set of records.
INSERT INTO burgers (burger_name) VALUES ('Cowboy Big Mac');
INSERT INTO burgers (burger_name) VALUES ('Cowboy Whopper');
INSERT INTO burgers (burger_name) VALUES ('Cowboy Slider');

SELECT * FROM burgers;