const db = require("../models");
const Users = db.Users;
const Op = db.Sequelize.Op;


// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body.username){
        res.status(400).send({
            message: "Username cannot be empty"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone
    };
    Users.create(user)
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
    const username = req.query.username;
    var condition = username ? { username: {[Op.like]: `%${username}%`}} : null;
    console.log('work')

    Users.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving users."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    var id = req.params.id;

    Users.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
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
