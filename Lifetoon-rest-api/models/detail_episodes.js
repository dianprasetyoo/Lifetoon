'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episodes = sequelize.define('detail_episodes', {
    page: DataTypes.STRING,
    image: DataTypes.STRING,
    episodes_id: DataTypes.INTEGER
  }, {});
  detail_episodes.associate = function(models) {
    detail_episodes.belongsTo(models.episodes, {
      as: 'episodesID',
      foreignKey: 'episodes_id'
    })
  };
  return detail_episodes;
};