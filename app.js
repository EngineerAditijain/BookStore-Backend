
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
/*if(process.env.NODE_ENV == "production"){
  app.use(express.static("book-store/build"))
}*/
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://Aditi:Aditi2002@cluster0.yg9hv8x.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
