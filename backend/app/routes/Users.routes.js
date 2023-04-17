module.exports = app => {
    const { authJwt } = require("../middleware/authJwt")
    const Users = require("../controllers/Users.controller.js");
    var router = require("express").Router();

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })
    router.post("/register", Users.create);

    router.get("/user/:id", Users.findOne);

    router.get("/user", Users.findAll);


    app.use('/api', router);

};
