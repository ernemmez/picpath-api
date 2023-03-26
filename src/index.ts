import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");
import config from "./config";
import pointRoutes from "./routes/pointRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.status(200);
    res.sendFile('index.html', { root: __dirname + '/public' });
});
app.use("/api", pointRoutes.routes);

app.listen(config.port, () =>
  console.log(`PP-API listening on --> http://localhost:${config.port}`)
);
