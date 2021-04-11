const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
const itemsRouter = require("./routes/items.router");

app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server ready at http://localhost:3001`);
});

app.use("", itemsRouter);
