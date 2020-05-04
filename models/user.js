// just left this to document sequelize 4.41.7 works with this, this program on v5.21
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        // Giving the User model a name of type STRING
        username: { type: DataTypes.STRING, unique: true, defaultValue: "Guest", validate: { len: [1, 8] } }
    });

    User.associate = function (models) {
        // Associating User with Posts
        // When an User is deleted, also delete any associated Posts
        User.hasMany(models.Burger, {
            as: "sequelizedburger",
            onDelete: "cascade"
        });
    };

    return User;
};
