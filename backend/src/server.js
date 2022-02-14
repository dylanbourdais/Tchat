const express = require("express")
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {console.log(`Server started on http://localhost:${PORT}...`)});

const database = [];

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send(database);
})

app.post("/newMessage", (req, res) => {

    database.unshift({
        nom: req.body.nom,
        message: req.body.message
    });

    database.splice(20, 1);

    res.status(200).send(req.body);
})