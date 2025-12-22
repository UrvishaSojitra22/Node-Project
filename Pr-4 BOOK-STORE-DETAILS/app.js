const express = require("express");
const app = express();
const port = 8006;

const dbConnect = require("./config/dbConnection");

dbConnect();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use("/", require("./routes/book.routes"));

app.listen(port, () => {
  console.log(`Book Store Details server started http://localhost:${port}`);

});
