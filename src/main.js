const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use("/agendacontato", router);

app.listen(9000, () => {
  if (app.get("env") == "development") console.log("Servidor Rodando...");
});
