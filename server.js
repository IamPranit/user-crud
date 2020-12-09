const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./dbConnection");
const users = require("./routes/user");
const morgan = require("morgan");

// Connect DB
dbConnection();

// Enable CORS
app.use(cors());

// Body Parser
app.use(express.json());

// Morgan
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

//Mount Route
app.use("/api/v1/users", users);

// PORT
const PORT = process.env.PORT || 5000;

// Start Listening
app.listen(PORT, console.log(`App is running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
