const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./database");

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

app.listen(3333);
