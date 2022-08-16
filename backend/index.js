const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api', require('./routes/posts'))

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  )
  .catch((err) => console.error(err));
