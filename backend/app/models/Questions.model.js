module.exports = (sequelize, Sequelize) => {
    const Questions = sequelize.define("Questions", {
      id: {
        type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true, field: 'id'
      },
      question: {
        type: Sequelize.STRING, allowNull: false, field: 'question'
      },
      whoask: {
        type: Sequelize.STRING, allowNull: false, field: 'whoask'
      },
    });

    return Questions;
  };
