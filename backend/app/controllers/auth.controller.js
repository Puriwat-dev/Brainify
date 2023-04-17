const db = require("../models");
const config = require("../config/auth.config");
const User = db.Users;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        password : bcrypt.hashSync(req.body.password, 8),
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        phone : req.body.phone
    }).then(user => {
        res.send({message: "User registered succesfully!"})
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({message: "User Not Found."});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            })
        }

        var token = jwt.sign({id: user.id }, config.secret, {
            expiresIn: 85400
        });

        res.status(200).send({
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            accessToken:token
        })
        }).catch(err => {
            res.status(500).send({ message: err.message });
    })
}
