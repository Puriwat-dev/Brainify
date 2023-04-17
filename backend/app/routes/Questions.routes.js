module.exports = app => {
    const Questions = require("../controllers/Questions.controllers");
    var router = require("express").Router();

    router.post("/question", Questions.create);

    router.get("/question/:id", Questions.findOne);

    router.get("/question", Questions.findAll);

    app.use('/api', router);

};
