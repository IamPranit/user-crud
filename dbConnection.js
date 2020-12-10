const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/users", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnection;
