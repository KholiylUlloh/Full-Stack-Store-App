const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', require('./routes/posts'))


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() =>
    app.listen(3001, () => console.log(`Server listening on 3001`))
  )
  .catch((err) => console.error(err));
