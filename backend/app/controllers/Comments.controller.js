const db = require("../models");
const Comments = db.Comments;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.comment){
        res.status(400).send({
            message: "Comment cannot be empty"
        });
        return;
    }
    const comment = {
        questionid: req.body.questionid,
        comment: req.body.comment,
        bywho: req.body.bywho
    };
    Comments.create(comment)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the comment."
        })
    })
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const comment = req.query.comment;
    var condition = comment ? { comment: {[Op.like]: `%${comment}%`}} : null;
    console.log('work')

    Comments.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving Comments."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    var id = req.params.id;

    Comments.findByPk(id)
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
