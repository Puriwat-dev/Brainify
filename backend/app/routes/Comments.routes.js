module.exports = app => {
    const Comments = require("../controllers/Comments.controller");
    var router = require("express").Router();

    router.post("/comment", Comments.create);

    router.get("/comment/:id", Comments.findOne);

    router.get("/comment", Comments.findAll);

    app.use('/api', router);

};
