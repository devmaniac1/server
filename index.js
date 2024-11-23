const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const citiesRoutes = require("./routes/citiesRoutes");
const projectsRoutes = require("./routes/projectsRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongoDB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@server.eshro.mongodb.net/?retryWrites=true&w=majority&appName=server`;

app.get("/", (req, res) => {
  res.json({ status: 200 });
});

app.use("/api/cities", citiesRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/email", emailRoutes);

mongoose
  .connect(mongoDB)
  .then(() => {
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Connected");
    });
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
