require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/books", require("./routes/books"));

app.get("/", (req, res) => {
  res.send("Book Recommendation API  Backend📚");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
