'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    comics_id: DataTypes.INTEGER
  }, {});
  episodes.associate = function(models) {
    episodes.belongsTo(models.comics, {
      as: 'comicsID',
      foreignKey: 'comics_id'
    })
  };
  return episodes;
};