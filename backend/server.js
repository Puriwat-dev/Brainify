const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser");
const db = require("./app/models")
const app = express()

db.sequelize.sync();


app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message : "Welcome to brainify."})
});

require("./app/routes/Users.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/Questions.routes")(app);
require("./app/routes/Comments.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})



app.listen(4000)
