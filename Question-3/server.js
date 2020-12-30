const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

// app
const app = express();

// db
const db = "mongodb+srv://topu:XapGST82AICs4fem@cluster0.qy3wi.mongodb.net/starit_assignments?retryWrites=true&w=majority"
mongoose
  .connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((result) => console.log("DB Connected")).catch((err) =>{
    console.log(err)
  });

// mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });