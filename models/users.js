'use strict';
module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    timestamps: false
})

  users.associate = (models) => {
    // 1:1
    users.hasOne(models.userDetails, { foreignKey: 'id', as: 'userDetails', onDelete: 'CASCADE' });
    // 1:n
    users.hasMany(models.crystals, { foreignKey: 'createdBy', as: 'createdCrystals' });
    
    // users.belongsToMany(models.Crystal, {
    //   through: 'favourites',
    //   foreignKey: 'userId',
    //   as: 'users',
    // });
  };

  return users;
};

console.log('users', this.users);