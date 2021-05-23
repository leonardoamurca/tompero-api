const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./database");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
