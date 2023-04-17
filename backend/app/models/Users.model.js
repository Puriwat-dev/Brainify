module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("Users", {
      id: {
        type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true, field: 'id'
      },
      username: {
        type: Sequelize.STRING, allowNull: false, field: 'username'
      },
      password: {
        type: Sequelize.STRING, allowNull: false, field: 'password'
      },
      firstname: {
        type: Sequelize.STRING, allowNull: false, field: 'firstname'
      },
      lastname: {
        type: Sequelize.STRING, allowNull: false, field: 'lastname'
      },
      phone: {
        type: Sequelize.STRING, field: 'phone'
      },
    });

    return Users;
  };
