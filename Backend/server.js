const express = require('express');
require("dotenv").config();
const routing = require("./routes/routing");
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// Use the routing module
app.use("/api/v1", routing);

// Connect to the database
const connectWithDB = require("./config/database");
connectWithDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
