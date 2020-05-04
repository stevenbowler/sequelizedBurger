// just left this to document sequelize 4.41.7 works with this, this program on v5.21
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("sequelizedburger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger.associate = function (models) {
        // We're saying that a Burger should belong to an Author
        // A Burger can't be created without an Author due to the foreign key constraint
        models.Burger.belongsTo(models.User, {
            foreignKey: {
                name: userId,
                allowNull: false
            }
        });
    };

    return Burger;
};

//16:33:49	INSERT INTO sequelizedburgers (burger_name, devoured, userId) VALUES ('Superburger', 1, 'testuser2')	
//Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`burgers_db`.`sequelizedburgers`, 
//CONSTRAINT `sequelizedburgers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)	
//0.000 sec

//
