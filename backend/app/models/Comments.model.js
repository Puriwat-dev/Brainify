module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("Comments", {
      id: {
        type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true, field: 'id'
      },
      questionid: {
        type: Sequelize.INTEGER, field: 'questionid'
      },
      comment: {
        type: Sequelize.STRING, field: 'comment'
      },
      bywho: {
        type: Sequelize.STRING, allowNull: false, field: 'bywho'
      },
    });

    return Comments;
  };
