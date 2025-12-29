const express = require("express");
const app = express();
const port = 8006;

const dbConnect = require("./config/dbConnection");

dbConnect();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use("/uploads", express.static("uploads"));

app.use("/", require("./routes/movie.routes"));

app.listen(port, () => {
  console.log(`Movie Details server started http://localhost:${port}`);

});
