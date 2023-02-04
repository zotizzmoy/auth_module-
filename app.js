const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes

 app.use("/auth", authRoutes);
 app.use('/posts', require("./routes/posts"))

 

//DB Connections
// const DB = "mongodb://localhost:27017/auth";
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB CONNECTED");
//   });

//PORT
const port = 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
