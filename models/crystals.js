'use strict';
module.exports = (sequelize, DataTypes) => {

  const crystals = sequelize.define('crystals', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    image: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    colour: DataTypes.ARRAY(DataTypes.STRING),
    chakra: DataTypes.ARRAY(DataTypes.STRING),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  crystals.associate = (models) => {
    crystals.belongsTo(models.users, { foreignKey: 'id', as: 'createdBy' });
    
    // crystals.belongsToMany(models.User, {
    //   through: 'favourites',
    //   foreignKey: 'id',
    //   as: 'userId',
    // });
  };

  // node_modules/.bin/sequelize model:generate --name users_crystals --attributes userId:integer,crystalId:integer

  return crystals;
};