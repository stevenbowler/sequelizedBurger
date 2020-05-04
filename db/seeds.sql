--  DON'T USE THIS, USE THE SEQUELIZE MODEL ONLY
--  DON'T USE THIS, USE THE SEQUELIZE MODEL ONLY
--  DON'T USE THIS, USE THE SEQUELIZE MODEL ONLY
--  DON'T USE THIS, USE THE SEQUELIZE MODEL ONLY
/*
Still in the `db` folder, create a `seeds.sql` file. In this file, 
write insert queries to populate the `burgers` table with at least three entries.
*/

USE sequelizedBurgers_db;


-- Insert a set of records.
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Cowboy Big Mac', false);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Cowboy Whopper', false);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Cowboy Slider', false);

SELECT *
FROM burgers;