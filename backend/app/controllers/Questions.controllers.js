const db = require("../models");
const Questions = db.Questions;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.question){
        res.status(400).send({
            message: "Question cannot be empty"
        });
        return;
    }
    const question = {
        question: req.body.question,
        whoask: req.body.whoask,
    };
    Questions.create(question)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the User."
        })
    })
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const question = req.query.question;
    var condition = question ? { question: {[Op.like]: `%${question}%`}} : null;
    console.log('work')

    Questions.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving Questions."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    var id = req.params.id;

    Questions.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving question with id=" + id
        });
    })
};

// Update a User by the id in the request
exports.update = (req, res) => {

};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Users
exports.findAllPublished = (req, res) => {

};
