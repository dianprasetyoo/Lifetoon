'use strict';
module.exports = (sequelize, DataTypes) => {
  const comics = sequelize.define('comics', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  comics.associate = function(models) {
    comics.hasMany(models.favorites,{foreignKey : "comics_id", as: "favorite" })
    // comics.belongsTo(models.users, {
    //   as: 'usersID',
    //   foreignKey: 'createdBy'
    // })
  };
  return comics;
};