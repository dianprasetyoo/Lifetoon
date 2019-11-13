'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    isFavorite: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    comics_id: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    favorites.belongsTo(models.comics, {
      as: 'comicsID',
      foreignKey: 'comics_id'
    })
  };
  return favorites;
};